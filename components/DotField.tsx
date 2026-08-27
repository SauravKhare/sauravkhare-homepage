'use client'

import { useEffect, useRef } from 'react'

type DotFieldProps = {
  className?: string
  /** px spacing between dots */
  spacing?: number
  /** resting opacity of each dot */
  baseOpacity?: number
  /** opacity of a dot directly under the pointer */
  maxOpacity?: number
  /** px radius of pointer influence */
  radius?: number
  /** whether dots react to the pointer at all */
  reactive?: boolean
  /**
   * Whether the grid breathes on its own — a slow vertical wave of
   * brightness shimmering down the grid, like the grid is alive even
   * with nobody there. Independent of pointer reactivity; both can
   * run together.
   */
  breathing?: boolean
  /** seconds for one full breathing wave cycle */
  breatheDuration?: number
  /** how much the wave brightens a dot above baseOpacity, 0–1 */
  breatheAmplitude?: number
  /** tailwind text-color class used to resolve the resting dot color */
  dotClassName?: string
  /** tailwind text-color class used to resolve the near-pointer glow color */
  glowClassName?: string
}

/**
 * A quiet field of dots — a small nod to generative-grid sites like
 * dotmatrix, kept subtle enough not to compete with content. Colors are
 * resolved from the theme at runtime (via hidden probe elements) so it
 * stays correct across light/dark and any accent. Respects
 * prefers-reduced-motion by falling back to a static grid (no breathing,
 * no pointer reactivity).
 */
export function DotField({
  className = '',
  spacing = 28,
  baseOpacity = 0.12,
  maxOpacity = 0.9,
  radius = 160,
  reactive = true,
  breathing = false,
  breatheDuration = 9,
  breatheAmplitude = 0.22,
  dotClassName = 'text-foreground',
  glowClassName = 'text-primary',
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const baseProbeRef = useRef<HTMLSpanElement>(null)
  const glowProbeRef = useRef<HTMLSpanElement>(null)
  const pointerRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let pending = false
    let intervalId: ReturnType<typeof setInterval> | null = null
    const start = performance.now()

    function getColors() {
      const base = baseProbeRef.current ? getComputedStyle(baseProbeRef.current).color : 'currentColor'
      const glow = glowProbeRef.current ? getComputedStyle(glowProbeRef.current).color : base
      return { base, glow }
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas!.width = Math.max(1, Math.floor(width * dpr))
      canvas!.height = Math.max(1, Math.floor(height * dpr))
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height)
      const { base, glow } = getColors()
      const pointer = reactive && !reduceMotion ? pointerRef.current : null
      const doBreathe = breathing && !reduceMotion
      const t = (now - start) / 1000

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          let opacity = baseOpacity
          let size = 1
          let useGlow = false

          if (doBreathe) {
            const phase = (t / breatheDuration) * Math.PI * 2
            const wave = Math.sin(y / (spacing * 4.5) - phase)
            const w = (wave + 1) / 2
            opacity = baseOpacity + breatheAmplitude * w
            size = 1 + w * 0.6
          }

          if (pointer) {
            const dx = x - pointer.x
            const dy = y - pointer.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < radius) {
              const tt = 1 - dist / radius
              opacity = Math.max(opacity, baseOpacity + (maxOpacity - baseOpacity) * tt)
              size = Math.max(size, 1 + tt * 1.8)
              useGlow = tt > 0.12
            }
          }

          ctx!.globalAlpha = Math.min(opacity, 1)
          ctx!.fillStyle = useGlow ? glow : base
          ctx!.beginPath()
          ctx!.arc(x, y, size, 0, Math.PI * 2)
          ctx!.fill()
        }
      }
      ctx!.globalAlpha = 1
    }

    function scheduleDraw() {
      if (pending) return
      pending = true
      requestAnimationFrame((now) => {
        draw(now)
        pending = false
      })
    }

    function handleMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      pointerRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      scheduleDraw()
    }
    function handleLeave() {
      pointerRef.current = null
      scheduleDraw()
    }

    resize()
    draw(performance.now())

    const ro = new ResizeObserver(() => {
      resize()
      draw(performance.now())
    })
    ro.observe(canvas)

    if (reactive && !reduceMotion) {
      window.addEventListener('pointermove', handleMove, { passive: true })
      window.addEventListener('pointerleave', handleLeave)
    }

    // The breathing wave is slow (several seconds per cycle), so a low
    // redraw rate reads as smooth while staying cheap even with several
    // instances of this component on a page.
    if (breathing && !reduceMotion) {
      intervalId = setInterval(() => draw(performance.now()), 60)
    }

    return () => {
      ro.disconnect()
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
      if (intervalId) clearInterval(intervalId)
    }
  }, [spacing, baseOpacity, maxOpacity, radius, reactive, breathing, breatheDuration, breatheAmplitude])

  return (
    <>
      <span ref={baseProbeRef} className={dotClassName} style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true" />
      <span ref={glowProbeRef} className={glowClassName} style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true" />
      <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none block h-full w-full ${className}`} />
    </>
  )
}
