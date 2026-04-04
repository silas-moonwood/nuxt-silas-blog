<script setup lang="ts">
const { t } = useI18n()
// 确保服务端/客户端路径一致
const logoSrc = computed(() => {
  return `/avatar.png`
})
</script>

<template>
  <NuxtLink to="/" aria-label="">
    <div class="flex items-center">
      <img
        class="h-20 w-20 rounded-full"
        :src="logoSrc"
        alt=""
        aria-hidden="true"
        aria-label="{{ t('app.titleA11y') }}"
      />
      <h1 class="font-bold first-letter:text-4xl first-letter:uppercase">{{ t('app.title') }}</h1>
    </div>
  </NuxtLink>
</template>
