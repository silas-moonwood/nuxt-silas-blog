<script setup lang="ts">
const { nav } = useNav()
const emit = defineEmits<{
  (e: 'click', item: { path: string }): void
}>()

const handleClick = (item: { path: string }) => {
  emit('click', item)
}
</script>

<template>
  <UPageList divide>
    <UPageCard
      v-for="(item, index) in nav"
      @click="handleClick(item)"
      :key="index"
      variant="ghost"
      :to="item.path"
    >
      <template #body>
        <UUser :name="item.label" size="xl" />
      </template>
    </UPageCard>
    <UPageCard variant="ghost">
      <template #body>
        <div class="flex w-full justify-between">
          <LocaleSelect class="w-full" />
        </div>
      </template>
    </UPageCard>
    <UPageCard variant="ghost">
      <template #body>
        <UColorModeSwitch />
      </template>
    </UPageCard>
  </UPageList>
</template>
