'use client'

import { createClientFeature } from '@payloadcms/richtext-lexical/client'
import {
  $getSelection,
  $isRangeSelection,
  type LexicalEditor,
  type RangeSelection,
} from '@payloadcms/richtext-lexical/lexical'
import { useLexicalComposerContext } from '@payloadcms/richtext-lexical/lexical/react/LexicalComposerContext'
import { $getSelectionStyleValueForProperty, $patchStyleText } from '@payloadcms/richtext-lexical/lexical/selection'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { HexColorInput, HexColorPicker } from 'react-colorful'

import styles from './client.module.css'

const PRESET_COLORS = ['#4338ca', '#d97706', '#dc2626', '#0f766e']
const DEFAULT_PICK_COLOR = '#4338ca'
const NEUTRAL_COLOR = 'var(--theme-elevation-400)'
const PANEL_WIDTH = 240

type ToggleController = (triggerRect: DOMRect) => void

type PickerButtonProps = {
  anchorElem?: HTMLElement
  editor?: LexicalEditor
}

const toggleControllers = new WeakMap<LexicalEditor, ToggleController>()

function TextColorToolbarTrigger({ editor }: PickerButtonProps) {
  const [displayColor, setDisplayColor] = useState<string>(NEUTRAL_COLOR)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!editor) return
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection()
        if (!$isRangeSelection(selection)) return
        const color = $getSelectionStyleValueForProperty(selection, 'color', '')
        setDisplayColor((prev) => {
          const next = color || NEUTRAL_COLOR
          return prev === next ? prev : next
        })
      })
    })
  }, [editor])

  if (!editor) return null

  return (
    <button
      aria-label="Text color"
      className="toolbar-popup__button"
      data-button-key="textColor"
      onClick={() => {
        if (buttonRef.current) {
          toggleControllers.get(editor)?.(buttonRef.current.getBoundingClientRect())
        }
      }}
      onMouseDown={(e) => e.preventDefault()}
      ref={buttonRef}
      type="button"
    >
      <span
        style={{
          borderBottom: `3px solid ${displayColor}`,
          fontSize: '15px',
          fontWeight: 600,
          lineHeight: 1,
          paddingBottom: '1px',
        }}
      >
        A
      </span>
    </button>
  )
}

function TextColorPickerPlugin({ anchorElem }: { anchorElem: HTMLElement }) {
  const [editor] = useLexicalComposerContext()
  const [isOpen, setIsOpen] = useState(false)
  const [pickerColor, setPickerColor] = useState(DEFAULT_PICK_COLOR)
  const [panelPos, setPanelPos] = useState({ top: -9999, left: -9999 })
  const selectionRef = useRef<RangeSelection | null>(null)
  const isOpenRef = useRef(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  const setOpenState = useCallback((next: boolean) => {
    isOpenRef.current = next
    setIsOpen(next)
  }, [])

  const applyToCapturedSelection = useCallback(
    (patch: Record<string, string | null>) => {
      const captured = selectionRef.current
      if (!captured) return
      editor.update(
        () => {
          let selection = $getSelection()
          if ($isRangeSelection(selection)) {
            selectionRef.current = selection.clone()
          } else {
            selection = captured.clone()
          }
          try {
            $patchStyleText(selection, patch)
          } catch {
            selectionRef.current = null
          }
        },
        { discrete: true },
      )
    },
    [editor],
  )

  const handleColorChange = useCallback(
    (hex: string) => {
      setPickerColor(hex)
      applyToCapturedSelection({ color: hex })
    },
    [applyToCapturedSelection],
  )

  const handleClear = useCallback(() => {
    applyToCapturedSelection({ color: null })
    setOpenState(false)
  }, [applyToCapturedSelection, setOpenState])

  useEffect(() => {
    if (!isOpen) return

    const isInsidePanel = (target: Node) =>
      (panelRef.current?.contains(target) ?? false) ||
      ((target as Element | null)?.closest?.('[data-button-key="textColor"]') ?? false)

    const handlePointerDown = (event: PointerEvent) => {
      if (!isInsidePanel(event.target as Node)) setOpenState(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenState(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, setOpenState])

  useEffect(() => {
    const toggle: ToggleController = (triggerRect) => {
      if (isOpenRef.current) {
        setOpenState(false)
        return
      }
      editor.getEditorState().read(() => {
        const selection = $getSelection()
        if (!$isRangeSelection(selection)) return
        selectionRef.current = selection.clone()

        const anchorRect = anchorElem.getBoundingClientRect()
        if (anchorRect.width > 0) {
          let left = triggerRect.left - anchorRect.left + triggerRect.width / 2 - PANEL_WIDTH / 2
          left = Math.max(0, Math.min(left, anchorRect.width - PANEL_WIDTH))
          setPanelPos({
            top: triggerRect.bottom - anchorRect.top + 6,
            left,
          })
        }

        const active = $getSelectionStyleValueForProperty(selection, 'color', '')
        setPickerColor(active || DEFAULT_PICK_COLOR)
        setOpenState(true)
      })
    }
    toggleControllers.set(editor, toggle)
    return () => {
      toggleControllers.delete(editor)
    }
  }, [anchorElem, editor, setOpenState])

  if (!isOpen) return null

  return createPortal(
    <div
      className={styles.panel}
      onClick={(e) => e.stopPropagation()}
      ref={panelRef}
      style={{ top: panelPos.top, left: panelPos.left }}
    >
      <div className={styles.presets}>
        {PRESET_COLORS.map((preset) => (
          <button
            key={preset}
            aria-label={`Set color ${preset}`}
            className={styles.preset}
            onClick={() => handleColorChange(preset)}
            onMouseDown={(e) => e.preventDefault()}
            style={{ background: preset }}
            title={preset}
            type="button"
          />
        ))}
      </div>
      <HexColorPicker color={pickerColor} onChange={handleColorChange} />
      <div className={styles.footer}>
        <HexColorInput
          className={styles.hexInput}
          color={pickerColor}
          onChange={handleColorChange}
          prefixed
        />
        <button className={styles.clearButton} onClick={handleClear} type="button">
          Clear
        </button>
      </div>
    </div>,
    anchorElem,
  )
}

export const TextColorClientFeature = createClientFeature({
  plugins: [
    {
      Component: TextColorPickerPlugin,
      position: 'floatingAnchorElem',
    },
  ],
  toolbarFixed: {
    groups: [
      {
        type: 'buttons',
        items: [{ Component: TextColorToolbarTrigger, key: 'textColor' }],
        key: 'textColor',
        order: 30,
      },
    ],
  },
  toolbarInline: {
    groups: [
      {
        type: 'buttons',
        items: [{ Component: TextColorToolbarTrigger, key: 'textColor' }],
        key: 'textColor',
        order: 30,
      },
    ],
  },
})
