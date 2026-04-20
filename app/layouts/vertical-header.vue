<script setup lang="ts">
import HorizontalContentHeader from '~/components/Header/HorizontalContentHeader.vue'
import HorizontalHeader from '~/components/Header/HorizontalHeader.vue'
</script>

<template>
  <div class="relative min-h-dvh w-full overflow-hidden">
    <HorizontalHeader>
      <HorizontalContentHeader />
    </HorizontalHeader>
    <main class="min-w-0 flex-1 p-4">
      <NuxtLoadingIndicator :height="3" color="#3b82f6" />
      <div>
        <slot />
      </div>
      <Footer />
    </main>
  </div>
</template>
