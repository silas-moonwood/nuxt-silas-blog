<script setup lang="ts">
import { useSoundState } from './useSound'

const audioRef = useTemplateRef('audioRef')

const { isSoundOn } = useSoundState()
const { playing } = useMediaControls(audioRef, {
  src: '/sounds/rain-bgm-2.mp3'
})

watch(isSoundOn, (newVal) => {
  if (newVal) {
    playing.value = true
  } else {
    playing.value = false
  }
})
</script>

<template>
  <div>
    <audio ref="audioRef" loop />
  </div>
</template>
