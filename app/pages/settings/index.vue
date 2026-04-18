<script setup lang="ts">
import LayoutSwitcher from '~/components/Settings/LayoutSwitcher.vue'

const { t } = useI18n()

const title = shallowRef(t('app.title') + ' - ' + t('page.settings.title'))
useHead({
  title
})
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="text-3xl">{{ t('page.settings.title') }}</h3>
      <LayoutSwitcher />
    </template>
  </UCard>
</template>
