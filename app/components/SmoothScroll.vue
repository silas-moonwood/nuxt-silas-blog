<script setup lang="ts">
import { VueLenis } from 'lenis/vue'

const lenisOptions = {
  // lenis options (optional)
}
</script>

<template>
  <VueLenis root :options="lenisOptions">
    <slot />
  </VueLenis>
</template>
