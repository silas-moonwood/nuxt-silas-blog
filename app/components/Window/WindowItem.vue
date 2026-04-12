<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import Vue3DraggableResizable from 'vue3-draggable-resizable'

interface Props {
  win: Omit<WindowInstance, 'component'>
}

const { width: initWidth, height: initHeight } = useWindowSize()
const props = defineProps<Props>()

const { closeWindow } = useWindowManager()

const active = ref(false)

const close = () => {
  closeWindow(props.win.id)
}

function print(val: string) {
  console.log(val)
}
</script>

<template>
  <ClientOnly>
    <Vue3DraggableResizable
      :initW="initWidth / 1.5"
      :min-w="initWidth / 1.5"
      :initH="initHeight / 1.5"
      :min-h="initHeight / 1.5"
      v-model:x="win.x"
      v-model:y="win.y"
      v-model:w="win.w"
      v-model:h="win.h"
      v-model:active="active"
      :draggable="true"
      :resizable="true"
      classNameActive="bg-primary"
      classNameHandle="border-red-300"
      classNameResizable="border border-default"
      classNameDragging="border border-default"
      @activated="print('activated')"
      @deactivated="print('deactivated')"
      @drag-start="print('drag-start')"
      @resize-start="print('resize-start')"
      @dragging="print('dragging')"
      @resizing="print('resizing')"
      @drag-end="print('drag-end')"
      @resize-end="print('resize-end')"
    >
      <div class="bg-default h-full w-full">
        <div class="border-default flex items-center justify-between border-b px-4 py-2">
          <div class="">{{ win.title }}</div>
          <Icon class="cursor-pointer" role="button" @click="close" name="ic:twotone-cancel" />
        </div>
        <div>
          <slot body />
        </div>
      </div>
    </Vue3DraggableResizable>
  </ClientOnly>
</template>
