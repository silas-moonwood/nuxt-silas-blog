<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: t(`${$t('app.title')} - ${t('page.home.title')}`),
  ogTitle: t(`${$t('app.title')} - ${t('page.home.title')}`),
  twitterTitle: t(`${$t('app.title')} - ${t('page.home.title')}`),
  description: t('app.description'),
  ogDescription: t('app.description'),
  twitterDescription: t('app.description')
})
const { openWindow } = _useWindowManager()
</script>

<template>
  <div class="my-12 flex flex-col items-center justify-center px-12">
    <UPageHero title="Silas or Froggy" :description="$t('page.home.hi')" />
    <UButton
      @click="
        openWindow({
          id: Date.now().toString(),
          title: 'Test Window'
        })
      "
      >Open Window</UButton
    >
  </div>
</template>
