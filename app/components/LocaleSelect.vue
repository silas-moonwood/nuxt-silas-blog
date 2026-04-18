<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="locales as any"
    @update:model-value="(value) => setLocale(value as LocaleObject['code'])"
    class="w-48"
    v-bind="$attrs"
  />
</template>
