<script setup lang="ts">
import type { Locale } from '@nuxt/ui'
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, locales: localesList, setLocale } = useI18n()

const locales = computed(() => {
  return localesList.value.map((locale) => ({
    code: locale.code,
    name: locale.name
  })) as Locale<any>[]
})
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="locales"
    @update:model-value="(value) => setLocale(value as LocaleObject['code'])"
    class="w-48"
  />
</template>
