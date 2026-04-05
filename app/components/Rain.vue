<script setup lang="ts">
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
  window.addEventListener('resize', resize)

  const w = canvas.width
  const h = canvas.height

  ctx.strokeStyle = 'rgba(174,194,224,0.5)'
  ctx.lineWidth = 3
  ctx.lineCap = 'round'

  const maxParts = 1000

  const particles = Array.from({ length: maxParts }).map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    l: Math.random() * 1,
    xs: -4 + Math.random() * 4 + 2,
    ys: Math.random() * 10 + 10
  }))

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
  <canvas ref="canvasRef" class="fixed top-0 left-0 w-full h-full pointer-events-none" />
</template>
