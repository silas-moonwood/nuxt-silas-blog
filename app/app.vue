<script setup lang="ts">
const { t } = useI18n()
const { isMobile } = useDevice()

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
  <div class="h-screen">
    <SmoothScroll>
      <UApp>
        <NuxtRouteAnnouncer />
        <Rain />
        <SoundRain />
        <AppLoading />
        <NuxtLayout class="relative">
          <Background />

          <Teleport to="body">
            <WindowManager />
          </Teleport>

          <Header>
            <Logo />
            <ClientOnly>
              <NavMobile v-if="isMobile">
                <template #body>
                  <NavMobileList @click="handleNavMobileListItemClick" />
                </template>
              </NavMobile>
              <Nav v-else>
                <template #left>
                  <LocaleSelect />
                </template>
                <template #right>
                  <UColorModeSwitch />
                  <SoundSwitch />
                </template>
              </Nav>
            </ClientOnly>
          </Header>
          <main class="pb-4">
            <NuxtLoadingIndicator :height="3" color="#3b82f6" />
            <NuxtPage />
          </main>
        </NuxtLayout>
        <Footer />
      </UApp>
    </SmoothScroll>
  </div>
</template>
