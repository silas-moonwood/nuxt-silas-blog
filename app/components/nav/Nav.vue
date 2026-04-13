<script setup lang="ts">
const localePath = useLocalePath()
const { nav } = useNav()

withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
  }>(),
  { orientation: 'horizontal' }
)
</script>

<template>
  <nav
    class="flex gap-8"
    :class="orientation === 'vertical' ? 'flex-col items-start gap-4' : 'flex-row items-center'"
  >
    <slot name="left" />
    <template v-for="item in nav" :key="item.path">
      <NuxtLink :to="localePath(item.path)" class="cursor-pointer">
        {{ item.label }}
      </NuxtLink>
    </template>
    <slot name="right" />
  </nav>
</template>
