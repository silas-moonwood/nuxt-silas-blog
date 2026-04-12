<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

const colorMode = useColorMode()
const rainColor = shallowRef(colorMode.preference)

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()
  useEventListener(window, 'resize', resize)

  const w = canvas.width
  const h = canvas.height

  watchEffect(() => {
    rainColor.value = colorMode.preference
    ctx.strokeStyle = rainColor.value === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
  })

  ctx.lineWidth = 3
  ctx.lineCap = 'round'

  const maxParts = 1000

  const particles = Array.from({ length: maxParts }).map(() => {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      l: Math.random() * 1,
      xs: -4 + Math.random() * 4 + 2,
      ys: Math.random() * 10 + 10
    }
  })

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const p of particles) {
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys)
      ctx.stroke()
    }

    move()
    requestAnimationFrame(draw)
  }

  const move = () => {
    for (const p of particles) {
      p.x += p.xs
      p.y += p.ys

      if (p.x > canvas.width || p.y > canvas.height) {
        p.x = Math.random() * canvas.width
        p.y = -20
      }
    }
  }

  draw()
})
</script>

<template>
  <canvas ref="canvasRef" class="pointer-events-none fixed top-0 left-0 h-full w-full" />
</template>
