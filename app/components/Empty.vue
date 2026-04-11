<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UEmpty
    :avatar="{
      src: '/avatar.png'
    }"
    :title="t('app.empty.title')"
    :description="t('app.empty.description')"
  />
</template>
