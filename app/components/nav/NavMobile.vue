<script setup lang="ts">
const { open } = useNavMobileState()!
const { t } = useI18n()
</script>

<template>
  <USlideover
    v-model:open="open"
    :title="t('nav.mobile.menu.title')"
    :description="t('nav.mobile.menu.description')"
    placement="right"
  >
    <Icon name="material-symbols:menu-rounded" class="size-8" />
    <template #body>
      <slot name="body" />
    </template>
  </USlideover>
</template>
