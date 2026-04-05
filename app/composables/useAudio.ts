// composables/useAudio.ts
import { useMediaControls } from '@vueuse/core'
import { useSound } from '@vueuse/sound'

export const useAudio = (ref: Ref<HTMLAudioElement | null>) => {
  // 🎵 BGM
  const audio = ref.value

  const bgm = useMediaControls(audio, {
    src: '/sounds/rain-bg.mp3'
  })

  // 🔊 音效
  const click = useSound('/sounds/mouse-click.mp3')
  // const success = useSound('/sounds/success.mp3')

  return {
    bgm,
    sfx: {
      click: click.play
      // success: success.play
    },
    audio
  }
}
