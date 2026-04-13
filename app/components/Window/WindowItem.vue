<script setup lang="ts">
import { usePreferredReducedMotion, useWindowSize } from '@vueuse/core'
import gsap from 'gsap'
import Vue3DraggableResizable from 'vue3-draggable-resizable'

interface Props {
  win: WindowInstance
}

const { width: initWidth, height: initHeight } = useWindowSize()
const props = defineProps<Props>()

const { focusWindow, closeWindow } = useWindowManager()

const reducedMotion = usePreferredReducedMotion()
const windowEl = useTemplateRef<HTMLElement>('windowEl')
const closing = ref(false)
const active = ref(false)
const entered = ref(false)
const positioned = ref(false)

const defaultW = computed(() => initWidth.value / 1.5)
const defaultH = computed(() => initHeight.value / 1.5)

watchEffect(() => {
  // Only set initial position/size once, and never override user-defined coords.
  if (positioned.value) return
  if (!initWidth.value || !initHeight.value) return

  const needsPosition = props.win.x == null || props.win.y == null
  const needsSize = props.win.w == null || props.win.h == null

  if (!needsPosition && !needsSize) {
    positioned.value = true
    return
  }

  const w = props.win.w ?? defaultW.value
  const h = props.win.h ?? defaultH.value

  if (props.win.w == null) props.win.w = w
  if (props.win.h == null) props.win.h = h

  if (props.win.x == null) props.win.x = Math.max(0, (initWidth.value - w) / 2)
  if (props.win.y == null) props.win.y = Math.max(0, (initHeight.value - h) / 2)

  positioned.value = true
})

const focus = () => {
  focusWindow(props.win.id)
}

const close = () => {
  if (closing.value) return
  if (reducedMotion.value === 'reduce') {
    closeWindow(props.win.id)
    return
  }

  const el = windowEl.value
  if (!el) {
    closeWindow(props.win.id)
    return
  }

  closing.value = true
  gsap.to(el, {
    opacity: 0,
    scale: 0.96,
    y: 10,
    duration: 0.18,
    ease: 'power1.in',
    onComplete: () => closeWindow(props.win.id)
  })
}

watch(
  () => windowEl.value,
  (el) => {
    if (!el) return
    if (entered.value) return
    if (reducedMotion.value === 'reduce') return

    entered.value = true
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.96, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.22, ease: 'power2.out' }
    )
  },
  { immediate: true }
)
</script>

<template>
  <ClientOnly>
    <Vue3DraggableResizable
      :parent="true"
      :initW="initWidth / 1.5"
      :min-w="initWidth / 1.5"
      :initH="initHeight / 1.5"
      :min-h="initHeight / 1.5"
      v-model:x="win.x"
      v-model:y="win.y"
      v-model:w="win.w"
      v-model:h="win.h"
      v-model:active="active"
      :style="{ zIndex: win.z }"
      :draggable="true"
      :resizable="true"
      classNameActive="border border-primary"
      classNameResizable="border border-default"
      classNameDragging="border border-default"
      @activated="focus"
    >
      <div
        ref="windowEl"
        class="bg-default border-muted h-full w-full rounded-2xl border will-change-transform"
      >
        <SoundContainer src="/sounds/click-2.mp3">
          <div
            class="border-default flex cursor-move items-center justify-between border-b px-4 py-2"
          >
            <div class="">{{ win.title }}</div>
            <Icon
              class="cursor-pointer"
              role="button"
              @click.capture="close"
              name="ic:twotone-cancel"
            />
          </div>
          <div class="p-2">
            <component :is="win.component" />
          </div>
        </SoundContainer>
      </div>
    </Vue3DraggableResizable>
  </ClientOnly>
</template>
