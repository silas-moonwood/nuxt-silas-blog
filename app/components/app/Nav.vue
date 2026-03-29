<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const { nav } = useNav()

const languageItems = ref(
  locales.value.map((locale: LocaleObject) => ({
    label: locale.name,
    value: locale.code,
    icon: 'i-lucide-circle-help'
  }))
)

const currentLocale = ref(languageItems.value.find((item) => item.value === locale.value))

watchEffect(() => {
  setLocale(currentLocale.value!.value)
})

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <nav class="flex items-center gap-8 text-lg">
    <USelectMenu
      class="min-w-42"
      icon="i-lucide-circle-help"
      v-model="currentLocale"
      :items="languageItems"
    />
    <template v-for="item in nav" :key="item.path">
      <NuxtLink :to="localePath(item.path)" class="cursor-pointer">{{ item.label }}</NuxtLink>
    </template>
    <Icon name="entypo:light-up" class="cursor-pointer" @click="toggleColorMode"></Icon>
  </nav>
</template>
