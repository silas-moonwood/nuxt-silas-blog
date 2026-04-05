import type { UseMediaControlsReturn } from '@vueuse/core'
import type { Ref } from 'vue'

interface Audio {
  bgm: UseMediaControlsReturn
  sfx: {
    click: () => void
    // success: () => void
  }
  audio: Ref<HTMLAudioElement | null>
}

declare module '#app' {
  interface NuxtApp {
    $audio: Audio
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $audio: Audio
  }
}
