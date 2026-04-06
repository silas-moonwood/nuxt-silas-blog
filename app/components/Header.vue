<script setup lang="ts"></script>

<template>
  <SoundContainer>
    <header
      ref="headerRef"
      v-backdrop
      class="border-b border-[#e9e8e8] dark:border-[#333] flex justify-between items-center px-6 sticky top-0 z-10"
    >
      <slot />
    </header>
  </SoundContainer>
</template>
