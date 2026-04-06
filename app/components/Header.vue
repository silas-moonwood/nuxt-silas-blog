<script setup lang="ts">
const b = 'b'
const d = 'd'
const obj = {
  b,
  d
}
</script>

<template>
  <SoundContainer>
    <header
      ref="headerRef"
      v-backdrop
      class="sticky top-0 z-10 flex items-center justify-between border-b border-[#e9e8e8] px-6 dark:border-[#333]"
    >
      <slot />
    </header>
  </SoundContainer>
</template>
