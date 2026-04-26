<script setup lang="ts"></script>

<template>
  <SoundContainer>
    <header
      ref="headerRef"
      v-backdrop
      v-bind="$attrs"
      class="sticky top-0 z-10 flex items-center justify-between border-b border-[#e9e8e8] px-6 dark:border-[#333]"
    >
      <slot />
    </header>
  </SoundContainer>
</template>
