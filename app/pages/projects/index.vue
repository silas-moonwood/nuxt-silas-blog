<script setup lang="ts">
const { t } = useI18n()

const title = shallowRef(t('app.title') + ' - ' + t('page.projects.title'))
useHead({
  title
})
</script>

<template>
  <Empty />
</template>
