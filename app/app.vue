<script setup lang="ts">
import {
  Nav,
  NavMobile,
  SmoothScroll,
  Cursor,
  CursorContainer,
  Logo,
  Header
} from '@/components/app'
import { useDevice } from '@/composables'

const { t } = useI18n()
const { isMobile } = useDevice()
useSeoMeta({
  title: () => t('app.title'),
  description: () => t('app.description')
})
</script>

<template>
  <div class="h-screen">
    <SmoothScroll>
      <UApp>
        <NuxtLayout class="relative">
          <Header>
            <Logo />
            <NavMobile v-if="isMobile" />
            <Nav v-else />
          </Header>
          <Cursor />
          <main class="pb-4">
            <CursorContainer>
              <NuxtPage />
            </CursorContainer>
          </main>
        </NuxtLayout>
      </UApp>
    </SmoothScroll>
  </div>
</template>
