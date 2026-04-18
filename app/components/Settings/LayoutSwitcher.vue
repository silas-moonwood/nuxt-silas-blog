<script setup lang="ts">
const { toggleLayout, layout } = useLayoutSwitcher()
const { t } = useI18n()

function changeChooseLayout() {
  toggleLayout()
}
</script>

<template>
  <div class="p-4">
    <label class="my-2 block" for="">{{ t('page.settings.header.value') }}:</label>
    <div class="flex flex-wrap gap-2" @click="changeChooseLayout">
      <button
        :class="[layout === 'default' ? 'bg-primary text-inverted' : 'bg-muted']"
        class="rounded-2xl bg-[#77a670] px-5 py-2 shadow"
      >
        {{ t('page.settings.header.vertical') }}
      </button>
      <button
        :class="[layout === 'vertical-header' ? 'bg-primary text-inverted' : 'bg-muted']"
        class="rounded-2xl bg-[#77a670] px-5 py-2 shadow"
      >
        {{ t('page.settings.header.horizontal') }}
      </button>
    </div>
  </div>
</template>
