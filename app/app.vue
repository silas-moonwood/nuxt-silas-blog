<script setup lang="ts">
import VerticalHeader from '~/components/Header/VerticalHeader.vue'
const { t } = useI18n()
const { isMobile } = useDevice()
const { dock } = useHeaderDock()

useSeoMeta({
  title: t('app.title'),
  ogTitle: t('app.title'),
  description: t('app.description'),
  ogDescription: t('app.description'),
  ogSiteName: t('app.title'),
  ogImage: '/avatar.png',
  ogType: 'website',
  ogUrl: process.env.WEBSITE_URL,
  ogLocale: 'en',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

useNavMobileProvider()
const { open } = useNavMobileState() || { open: ref(false) }

function handleNavMobileListItemClick() {
  open.value = false
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
