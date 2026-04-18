<script setup lang="ts">
const { toggleLayout, layout } = useLayoutSwitcher()

function changeChooseLayout() {
  toggleLayout()
}
</script>

<template>
  <div>
    <h3>Change Layout</h3>
    <label for="">Header:</label>
    <div class="flex flex-wrap gap-2" @click="changeChooseLayout">
      <button
        :class="[layout === 'default' ? 'bg-[#4895ef] text-white' : 'bg-[#d1d1d1]']"
        class="rounded-2xl bg-[#77a670] px-4 py-2 shadow"
      >
        Vertical
      </button>
      <button
        :class="[layout === 'vertical-header' ? 'bg-[#4895ef] text-white' : 'bg-[#d1d1d1]']"
        class="rounded-2xl bg-[#77a670] px-4 py-2 shadow"
      >
        Horizontal
      </button>
    </div>
  </div>
</template>
