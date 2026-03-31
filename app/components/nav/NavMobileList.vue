<script setup lang="ts">
const { nav } = useNav()
const { t } = useI18n()
const emit = defineEmits<{
  (e: 'click', item: { path: string }): void
}>()

const handleClick = (item: { path: string }) => {
  emit('click', item)
}

const navList = [
  ...nav.value,
  {
    key: '',
    label: 'light or dark',
    path: '',
    icon: 'material-symbols:home-rounded'
  },
  {
    key: '',
    label: 'language',
    path: '',
    icon: 'material-symbols:home-rounded'
  }
]
</script>

<template>
  <UPageList divide>
    <UPageCard
      v-for="(item, index) in navList"
      @click="handleClick(item)"
      :key="index"
      variant="ghost"
      :to="item.path"
    >
      <template #body>
        <UUser :name="item.label" size="xl" />
      </template>
    </UPageCard>
  </UPageList>
</template>
