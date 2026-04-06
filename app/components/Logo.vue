<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { gsap } from 'gsap'

const { t } = useI18n()
const localePath = useLocalePath()
// 确保服务端/客户端路径一致
const logoSrc = computed(() => {
  return `/avatar.png`
})

const logoRef = useTemplateRef('logoRef')

// onMounted(() => {
//   useEventListener(logoRef.value, 'mouseenter', () => {
//     gsap.to(logoRef.value, {
//       duration: 0.5,
//       skewY: 90,
//       // skewX: -45
//     })
//   })
//   useEventListener(logoRef.value, 'mouseleave', () => {
//     gsap.to(logoRef.value, {
//       duration: 0.5,
//       skewY: 0
//     })
//   })
// })
</script>

<template>
  <NuxtLink :to="localePath('/')" aria-label="">
    <div class="flex items-center">
      <img
        class="h-20 w-20 rounded-full"
        ref="logoRef"
        :src="logoSrc"
        alt=""
        aria-hidden="true"
        aria-label="{{ t('app.titleA11y') }}"
      />
      <h1 class="font-bold first-letter:text-4xl first-letter:uppercase">{{ t('app.title') }}</h1>
    </div>
  </NuxtLink>
</template>
