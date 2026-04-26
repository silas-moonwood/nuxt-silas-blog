<script setup lang="ts">
import type { HeaderDock } from '~/composables/useHeaderDock'

withDefaults(
  defineProps<{
    dock?: HeaderDock
  }>(),
  { dock: 'left' }
)
</script>

<template>
  <SoundContainer>
    <header
      ref="headerRef"
      v-backdrop
      class="sticky top-0 z-10 flex h-dvh flex-col justify-between gap-4 border-[#e9e8e8] px-6 py-4 dark:border-[#333]"
      :class="dock === 'left' ? 'border-r' : 'border-l'"
    >
      <slot />
    </header>
  </SoundContainer>
</template>
