<script setup lang="ts">
import { useSoundState } from './useSound'

const { isSoundOn, toggleSound } = useSoundState()

const handleChangeSound = () => {
  toggleSound()
}
</script>

<template>
  <UButton variant="ghost" @click="handleChangeSound">
    <Icon
      :class="{ 'is-sound-on': isSoundOn, 'is-sound-off': !isSoundOn }"
      name="emojione-v1:bull-horn"
    />
  </UButton>
</template>

<style scoped>
.is-sound-on {
  color: #000;
}

.is-sound-off {
  color: #fff;
  opacity: 0.9;
  &::after {
    content: '';
    position: absolute;
    transform: rotate(45deg) translate(-100%, 0%);
    width: 0.2rem;
    height: 1.4rem;
    color: #000000;
    background-color: #000000;
    border-radius: 20px;
  }

  .dark &::after {
    color: #fff;
    background-color: #fff;
  }
}
</style>
