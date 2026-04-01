<script setup lang="ts">
import { useDevice } from '@/composables'
import {
  Footer,
  Header,
  LocaleSelect,
  Logo,
  Nav,
  NavMobile,
  NavMobileList,
  SmoothScroll,
} from '~/components'
import { useNavMobileProvider, useNavMobileState } from '~/components/nav/useNavMobile'

const { t } = useI18n()
const { isMobile } = useDevice()

useSeoMeta({
  title: () => t('app.title'),
  description: () => t('app.description'),
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
