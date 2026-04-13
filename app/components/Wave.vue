<script setup lang="ts">
import { gsap } from 'gsap'

interface Props {
  amplitude?: number
  speed?: number
  points?: number
  height?: number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  amplitude: 20,
  speed: 2,
  points: 6,
  height: 200,
  color: '#3b82f6'
})

const pathRef = useTemplateRef<SVGPathElement>('pathRef')
let animation: gsap.core.Tween | null = null

// 生成 path
function generateWavePath(offset = 0) {
  const { amplitude, points, height } = props
  const width = window.innerWidth

  let path = `M 0 ${height}`

  const segment = width / points

  for (let i = 0; i <= points; i++) {
    const x = i * segment
    const y = height + Math.sin((i + offset) * 0.8) * amplitude

    path += ` L ${x} ${y}`
  }

  path += ` L ${width} ${height * 2} L 0 ${height * 2} Z`

  return path
}

onMounted(() => {
  let offset = 0

  animation = gsap.to(
    {},
    {
      duration: props.speed,
      repeat: -1,
      ease: 'linear',
      onUpdate: () => {
        offset += 0.02

        if (pathRef.value) {
          pathRef.value.setAttribute('d', generateWavePath(offset))
        }
      }
    }
  )
})

onBeforeUnmount(() => {
  animation?.kill()
})
</script>

<template>
  <svg class="wave" :style="{ width: '100%', height: height + 'px' }">
    <path ref="pathRef" :fill="color" />
  </svg>
</template>
