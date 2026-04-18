<script setup lang="ts">
const localePath = useLocalePath()
const { nav } = useNav()
</script>

<template>
  <nav v-bind="$attrs">
    <template v-for="item in nav" :key="item.path">
      <NuxtLink :to="localePath(item.path)" class="cursor-pointer">
        {{ item.label }}
      </NuxtLink>
    </template>
    <slot />
  </nav>
</template>
