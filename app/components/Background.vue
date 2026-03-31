<script setup lang="ts">
interface Props {
  src?: string
  video?: string
  blur?: number
  overlay?: string
  opacity?: number
}

const props = withDefaults(defineProps<Props>(), {
  blur: 0,
  opacity: 1,
  overlay: 'rgba(0,0,0,0.3)'
})
</script>

<template>
  <div class="bg-wrapper">
    <!-- 图片背景 -->
    <div
      v-if="src"
      class="bg"
      :style="{
        backgroundImage: `url(${src})`,
        filter: `blur(${blur}px)`,
        opacity
      }"
    />

    <!-- 视频背景 -->
    <video
      v-if="video"
      class="bg video"
      autoplay
      muted
      loop
      playsinline
      :style="{ opacity }"
    >
      <source :src="video" />
    </video>

    <!-- 遮罩 -->
    <div
      v-if="overlay"
      class="overlay"
      :style="{ background: overlay }"
    />
  </div>
</template>

<style scoped>
.bg-wrapper {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}

.bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.05); /* 防止 blur 边缘露白 */
}

.video {
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
}
</style>
