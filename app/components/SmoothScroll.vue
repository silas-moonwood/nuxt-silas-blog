<script setup lang="ts">
import { VueLenis } from 'lenis/vue'

const lenisOptions = {}
</script>

<template>
  <VueLenis root :options="lenisOptions">
    <slot />
  </VueLenis>
</template>
