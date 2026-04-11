<script setup lang="ts">
const { t } = useI18n()

const title = shallowRef(t('app.title') + ' - ' + t('page.blog.title'))
useHead({
  title
})
</script>

<template>
  <Empty />
</template>
