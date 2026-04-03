<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { useSound } from '@vueuse/sound'

interface Props {
  src?: string
  event?: string
}
const props = withDefaults(defineProps<Props>(), {
  src: '/sounds/mouse-click.mp3',
  event: 'click'
})

const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
const { play } = useSound(props.src)
useEventListener(containerRef, props.event, () => {
  play()
})
</script>

<template>
  <div ref="containerRef">
    <slot />
  </div>
</template>
