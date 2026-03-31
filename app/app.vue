<script setup lang="ts">
import {
  Nav,
  NavMobile,
  NavMobileList,
  SmoothScroll,
  Cursor,
  CursorContainer,
  Logo,
  Header,
  LocaleSelect,
  Footer
} from '~/components'
import { useDevice } from '@/composables'
import { useNavMobileProvider, useNavMobileState } from '~/components/nav/useNavMobile'

const { t } = useI18n()
const { isMobile } = useDevice()

useSeoMeta({
  title: () => t('app.title'),
  description: () => t('app.description')
})

useNavMobileProvider()
const { open } = useNavMobileState()!

const handleNavMobileListItemClick = () => {
  open.value = false
}
</script>
<template>
  <div class="h-screen">
    <SmoothScroll>
      <UApp>
        <NuxtLayout class="relative">
          <Header>
            <Logo />
            <ClientOnly>
              <NavMobile v-if="isMobile">
                <template #body>
                  <NavMobileList @click="handleNavMobileListItemClick" />
                </template>
              </NavMobile>
              <Nav v-else>
                <template #right>
                  <UColorModeSwitch />
                </template>
                <template #left>
                  <LocaleSelect />
                </template>
              </Nav>
            </ClientOnly>
          </Header>
          <!-- <Cursor /> -->
          <main class="pb-4">
            <NuxtPage />
          </main>
        </NuxtLayout>
        <Footer />
      </UApp>
    </SmoothScroll>
  </div>
</template>
