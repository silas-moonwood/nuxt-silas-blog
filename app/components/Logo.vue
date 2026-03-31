<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <NuxtLink to="/">
    <div class="flex items-center">
      <img class="h-20 w-20 rounded-full" src="/avatar.png" alt="avatar" />
      <span class="font-bold first-letter:text-4xl first-letter:uppercase">{{
        t('app.title')
      }}</span>
    </div>
  </NuxtLink>
</template>
