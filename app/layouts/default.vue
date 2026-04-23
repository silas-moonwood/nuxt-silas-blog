<script setup lang="ts">
const { dock } = useHeaderDock()

useNavMobileProvider()
</script>

<template>
  <div class="relative flex min-h-dvh w-full overflow-hidden">
    <VerticalHeader v-if="dock === 'left'" :dock="dock" class="w-65 shrink-0">
      <VerticalContentHeader />
    </VerticalHeader>

    <main class="min-w-0 flex-1 p-4">
      <NuxtLoadingIndicator :height="3" color="#3b82f6" />
      <slot />
      <Footer />
    </main>

    <VerticalHeader v-if="dock === 'right'" :dock="dock" class="w-65 shrink-0">
      <VerticalContentHeader />
    </VerticalHeader>
  </div>
</template>
