<!-- components/CursorContainer.vue -->
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)

let cursorEl: HTMLElement | null = null

const mouseMoveHandler = (e: MouseEvent) => {
  const rect = containerRef.value!.getBoundingClientRect()
  const inArea =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom

  // 触发自定义事件通知 Cursor
  containerRef.value?.dispatchEvent(
    new CustomEvent('cursor-move', {
      detail: { x: e.clientX, y: e.clientY, inArea }
    })
  )
}

onMounted(() => {
  containerRef.value?.addEventListener('mousemove', mouseMoveHandler)
})

onBeforeUnmount(() => {
  containerRef.value?.removeEventListener('mousemove', mouseMoveHandler)
})
</script>

<template>
  <div ref="containerRef" class="cursor-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.cursor-wrapper {
  position: relative;
  cursor: none;
}
</style>
