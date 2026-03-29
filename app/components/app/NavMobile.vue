<script setup lang="ts">
const open = defineModel<boolean>('open')
</script>

<template>
  <USlideover v-model:open="open" title="Menu" description="select an option" placement="right">
    <Icon name="material-symbols:menu-rounded" class="size-8" />
    <template #body> </template>
  </USlideover>
</template>
