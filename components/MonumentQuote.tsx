'use client'

import { Fragment, useEffect, useRef } from 'react'

interface MonumentQuoteProps {
  text?: string
}

export function MonumentQuote({ text = 'PER ASPERA\nAD ASTRA' }: MonumentQuoteProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const spot = spotRef.current
    if (!root || !spot) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const noHover = window.matchMedia('(hover: none), (pointer: coarse)').matches

    if (reduceMotion || noHover) {
      root.classList.add('is-static')
      return
    }

    let frame = 0

    function handleMove(e: PointerEvent) {
      const rect = root!.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        spot!.style.setProperty('--spot-x', `${x}%`)
        spot!.style.setProperty('--spot-y', `${y}%`)
      })
    }
    function handleEnter() {
      spot!.style.setProperty('--spot-opacity', '1')
    }
    function handleLeave() {
      spot!.style.setProperty('--spot-opacity', '0')
    }

    root.addEventListener('pointermove', handleMove, { passive: true })
    root.addEventListener('pointerenter', handleEnter)
    root.addEventListener('pointerleave', handleLeave)
    return () => {
      root.removeEventListener('pointermove', handleMove)
      root.removeEventListener('pointerenter', handleEnter)
      root.removeEventListener('pointerleave', handleLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  const lines = text.split('\n')

  const renderedText = lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ))

  return (
    <div ref={rootRef} className="quote-torch select-none text-center" aria-hidden="true">
      <p className="quote-base">{renderedText}</p>
      <p ref={spotRef} className="quote-spot">{renderedText}</p>
    </div>
  )
}
