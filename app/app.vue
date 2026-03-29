<script setup lang="ts">
import { Nav, SmoothScroll, Cursor, CursorContainer } from '@/components/app'
const { t } = useI18n()

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
          <header v-backdrop class="flex justify-between items-center px-6 sticky top-0 z-10">
            <NuxtLink to="/">
              <div class="flex items-center">
                <img class="h-20 w-20 rounded-full" src="/avatar.png" alt="avatar" />
                <span class="font-bold first-letter:text-4xl first-letter:uppercase">{{
                  t('app.title')
                }}</span>
              </div>
            </NuxtLink>
            <Nav />
          </header>
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
