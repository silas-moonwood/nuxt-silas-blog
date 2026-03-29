<script setup lang="ts">
const localePath = useLocalePath()
const { nav } = useNav()
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <nav class="flex items-center gap-8 text-lg">
    <slot />
    <template v-for="item in nav" :key="item.path">
      <NuxtLink :to="localePath(item.path)" class="cursor-pointer">{{ item.label }}</NuxtLink>
    </template>
    <Icon name="entypo:light-up" class="cursor-pointer" @click="toggleColorMode"></Icon>
  </nav>
</template>
