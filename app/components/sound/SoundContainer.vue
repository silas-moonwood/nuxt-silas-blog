<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { useSound } from '@vueuse/sound'

import { useSoundState } from './useSound'

interface Props {
  src?: string
  event?: string
}
const props = withDefaults(defineProps<Props>(), {
  src: '/sounds/mouse-click.mp3',
  event: 'click'
})

const { isSoundOn } = useSoundState()
const containerRef = useTemplateRef<HTMLDivElement>('containerRef')

const { play } = useSound(props.src)
useEventListener(containerRef, props.event, () => {
  if (isSoundOn.value) play()
})
</script>

<template>
  <div ref="containerRef">
    <slot />
  </div>
</template>
