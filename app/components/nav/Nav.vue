<script setup lang="ts">
const localePath = useLocalePath()
const { nav } = useNav()
</script>

<template>
  <nav class="flex items-center gap-8">
    <slot name="left" />
    <template v-for="item in nav" :key="item.path">
      <NuxtLink :to="localePath(item.path)" class="cursor-pointer">
        {{ item.label }}
      </NuxtLink>
    </template>
    <slot name="right" />
  </nav>
</template>
