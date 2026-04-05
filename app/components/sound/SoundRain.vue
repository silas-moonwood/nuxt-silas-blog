<script setup lang="ts">
// import { useAudio } from '~/composables'

const audioRef = useTemplateRef('audioRef')

const { playing, currentTime, duration } = useMediaControls(audioRef, {
  src: '/sounds/rain-bgm-2.mp3'
})

const handlePlayChange = () => {
  playing.value = !playing.value
  console.log(playing.value)
}
</script>

<template>
  <div>
    <audio ref="audioRef" loop />
    <span>{{ currentTime }} / {{ duration }}</span>
    <UButton @click="handlePlayChange">
      {{ playing ? '暂停' : '播放' }}
    </UButton>
  </div>
</template>
