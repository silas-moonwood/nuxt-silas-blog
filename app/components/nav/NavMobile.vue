<script setup lang="ts">
import { useNavMobileState } from './useNavMobile'
const { open } = useNavMobileState()!
</script>

<template>
  <USlideover v-model:open="open" title="Menu" description="select an option" placement="right">
    <Icon name="material-symbols:menu-rounded" class="size-8" />
    <template #body>
      <slot name="body" />
    </template>
  </USlideover>
</template>
