<script setup lang="ts">
import AboutPage from '~/pages/about/index.vue'
import BlogPage from '~/pages/blog/index.vue'
import ProjectsPage from '~/pages/projects/index.vue'

const { t } = useI18n()
const title = computed(() => `${t('app.title')} - ${t('page.home.title')}`)
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description: t('app.description'),
  ogDescription: t('app.description'),
  twitterDescription: t('app.description')
})

definePageMeta({
  // Layout: 'vertical-header'
})

const { openWindow } = useWindowManager()

type OpenPageWindowType = 'blog' | 'projects' | 'about'
const openPageWindow = (key: OpenPageWindowType) => {
  let component
  const title = t(`page.${key}.title`)

  if (key === 'blog') component = BlogPage
  if (key === 'projects') component = ProjectsPage
  if (key === 'about') component = AboutPage

  openWindow({
    id: Date.now().toString(),
    title: t(`page.${key}.title`),
    component
  })
}
</script>

<template>
  <div class="my-12 flex flex-col items-center justify-center px-12">
    <UPageHero title="Silas or Froggy" :description="$t('page.home.hi')" />

    <div class="flex gap-3">
      <LinearButton @click="openPageWindow('blog')">
        {{ t('page.blog.title') }}
      </LinearButton>
      <LinearButton @click="openPageWindow('projects')">
        {{ t('page.projects.title') }}
      </LinearButton>
      <LinearButton @click="openPageWindow('about')">
        {{ t('page.about.title') }}
      </LinearButton>
    </div>
  </div>
</template>
