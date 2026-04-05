<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('home.title')
})
</script>

<template>
  <div class="flex flex-col items-center justify-center px-12 my-12">
    <UPageHero title="Silas or Froggy" :description="$t('home.hi')" />
  </div>
</template>
