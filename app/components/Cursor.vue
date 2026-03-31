<!-- components/Cursor.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  color?: string
  size?: number
}
const props = defineProps<Props>()
const x = ref(0)
const y = ref(0)
const visible = ref(false)

let targetX = 0
let targetY = 0

// 更新坐标
const move = (e: MouseEvent) => {
  targetX = e.clientX
  targetY = e.clientY
  visible.value = true
}

// 平滑跟随
const loop = () => {
  x.value += (targetX - x.value) * 0.15
  y.value += (targetY - y.value) * 0.15
  requestAnimationFrame(loop)
}

onMounted(() => loop())
</script>

<template>
  <!-- <Teleport to="body"> -->
    <div
      v-if="visible"
      class="cursor"
      :style="{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        width: props.size + 'px',
        height: props.size + 'px',
        background: props.color
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g fill="none">
          <path
            fill="#28c545"
            d="M7.53 12.057c.271.627 1.055.797 1.597.381q.31-.239.62-.5c.226.273.464.547.724.808c.262.262.538.5.813.728a1.19 1.19 0 0 0 1.49.022l.72-.72a1.19 1.19 0 0 0-.021-1.491c-.228-.274-.466-.55-.729-.812a12 12 0 0 0-.806-.724q.266-.315.51-.632c.416-.542.246-1.325-.381-1.596c-1.384-.598-2.902-.92-4.424-.66a.94.94 0 0 0-.772.772c-.26 1.522.061 3.04.66 4.424Z"
          />
          <path
            fill="#8cf27e"
            fill-rule="evenodd"
            d="M2 6.634c0-1.585.443-2.717 1.18-3.454S5.05 2 6.634 2c1.378 0 2.414.336 3.141.904c.72.561 1.212 1.406 1.405 2.575a.75.75 0 0 0 1.48-.243c-.243-1.476-.896-2.684-1.962-3.515C9.64.896 8.25.5 6.634.5c-1.86 0-3.42.526-4.514 1.62C1.026 3.213.5 4.773.5 6.634c0 1.624.399 3.018 1.232 4.078c.838 1.067 2.056 1.717 3.542 1.954a.75.75 0 0 0 .236-1.481c-1.18-.188-2.033-.68-2.599-1.4C2.34 9.057 2 8.019 2 6.635Zm2.795 0c0-.69.192-1.124.454-1.385c.261-.262.695-.454 1.385-.454c.644 0 1.064.168 1.328.399a.75.75 0 1 0 .99-1.127c-.61-.535-1.418-.772-2.318-.772c-.966 0-1.827.274-2.446.893s-.893 1.48-.893 2.446c0 1.046.322 1.967 1.045 2.588a.75.75 0 0 0 .978-1.138c-.3-.258-.523-.705-.523-1.45"
            clip-rule="evenodd"
          />
        </g>
      </svg>
    </div>
  <!-- </Teleport> -->
</template>

<style scoped>
.cursor {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
}
</style>
