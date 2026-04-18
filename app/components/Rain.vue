<script setup lang="ts">
import { useEventListener, usePreferredReducedMotion } from '@vueuse/core'

const colorMode = useColorMode()
const rainColor = shallowRef(colorMode.preference)

const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const reducedMotion = usePreferredReducedMotion()
  let rafId: number | null = null
  let running = false

  const state = {
    w: 0,
    h: 0
  }

  type Particle = {
    x: number
    y: number
    l: number
    xs: number
    ys: number
  }
  let particles: Particle[] = []

  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))
  const desiredParticleCount = () => {
    // Roughly scale with screen area; keep an upper bound for performance.
    const byArea = Math.floor((state.w * state.h) / 2500)
    return clamp(byArea, 150, 900)
  }

  const createParticle = (): Particle => {
    return {
      x: Math.random() * state.w,
      y: Math.random() * state.h,
      l: Math.random() * 1,
      xs: -4 + Math.random() * 4 + 2,
      ys: Math.random() * 10 + 10
    }
  }

  const resize = () => {
    const dpr = Math.max(1, window.devicePixelRatio || 1)
    state.w = window.innerWidth
    state.h = window.innerHeight
    canvas.width = Math.floor(state.w * dpr)
    canvas.height = Math.floor(state.h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const target = desiredParticleCount()
    if (particles.length > target) particles = particles.slice(0, target)
    while (particles.length < target) particles.push(createParticle())
  }

  resize()
  useEventListener(window, 'resize', resize)

  watchEffect(() => {
    rainColor.value = colorMode.preference
    ctx.strokeStyle = rainColor.value === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
  })

  ctx.lineWidth = 3
  ctx.lineCap = 'round'

  const draw = () => {
    if (!running) return
    ctx.clearRect(0, 0, state.w, state.h)

    for (const p of particles) {
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys)
      ctx.stroke()
    }

    move()
    rafId = requestAnimationFrame(draw)
  }

  const move = () => {
    for (const p of particles) {
      p.x += p.xs
      p.y += p.ys

      if (p.x > state.w || p.y > state.h) {
        p.x = Math.random() * state.w
        p.y = -20
      }
    }
  }

  const stop = () => {
    running = false
    if (rafId != null) cancelAnimationFrame(rafId)
    rafId = null
  }

  const start = () => {
    if (running) return
    if (reducedMotion.value === 'reduce') return
    if (document.visibilityState === 'hidden') return
    running = true
    draw()
  }

  useEventListener(document, 'visibilitychange', () => {
    if (document.visibilityState === 'hidden') stop()
    else start()
  })

  watchEffect(() => {
    if (reducedMotion.value === 'reduce') stop()
    else start()
  })

  onBeforeUnmount(() => stop())
})
</script>

<template>
  <canvas ref="canvasRef" class="pointer-events-none fixed top-0 left-0 h-full w-full" />
</template>
