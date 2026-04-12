<script setup lang="ts">
const { windows } = useWindowManager()
</script>

<template>
  <WindowItem v-for="win in windows" :key="win.id" :win="win" />
</template>
