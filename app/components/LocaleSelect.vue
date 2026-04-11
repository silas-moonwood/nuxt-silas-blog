<script setup lang="ts">
import type { Locale } from '@nuxt/ui'
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, locales: localesList, setLocale } = useI18n()

const locales = computed(() =>
  localesList.value.map((locale) => {
    return {
      code: locale.code,
      name: locale.name
    }
  })
)
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="locales"
    @update:model-value="(value) => setLocale(value as LocaleObject['code'])"
    class="w-48"
    v-bind="$attrs"
  />
</template>
