<script setup lang="ts">
import VerticalHeader from '~/components/Header/VerticalHeader.vue'
const { dock } = useHeaderDock()
const { isMobile } = useDevice()
</script>

<template>
  <div>
    <Teleport to="body">
      <AppLoading />
      <WindowManager />
      <Background />
      <Rain />
      <SoundRain />
    </Teleport>

    <SmoothScroll>
      <UApp>
        <NuxtRouteAnnouncer />
        <div class="relative flex min-h-dvh w-full overflow-hidden">
          <VerticalHeader v-if="dock === 'left'" :dock="dock" class="w-[260px] shrink-0">
            <Logo />
            <ClientOnly>
              <NavMobile v-if="isMobile">
                <template #body>
                  <NavMobileList @click="handleNavMobileListItemClick" />
                </template>
              </NavMobile>
              <Nav v-else orientation="vertical">
                <template #left>
                  <LocaleSelect />
                </template>
                <template #right>
                  <div class="flex items-center gap-3">
                    <UColorModeSwitch />
                    <SoundSwitch />
                  </div>
                </template>
              </Nav>
            </ClientOnly>
          </VerticalHeader>

          <main class="min-w-0 flex-1 p-4">
            <NuxtLoadingIndicator :height="3" color="#3b82f6" />
            <slot />
            <Footer />
          </main>

          <VerticalHeader v-if="dock === 'right'" :dock="dock" class="w-[260px] shrink-0">
            <Logo />
            <ClientOnly>
              <NavMobile v-if="isMobile">
                <template #body>
                  <NavMobileList @click="handleNavMobileListItemClick" />
                </template>
              </NavMobile>
              <Nav v-else orientation="vertical">
                <template #left>
                  <LocaleSelect />
                </template>
                <template #right>
                  <div class="flex items-center gap-3">
                    <UColorModeSwitch />
                    <SoundSwitch />
                  </div>
                </template>
              </Nav>
            </ClientOnly>
          </VerticalHeader>
        </div>
      </UApp>
    </SmoothScroll>
  </div>
</template>
