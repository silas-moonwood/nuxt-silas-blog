<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div>
      <Logo />
      <Nav class="my-4 flex flex-col items-end gap-8 px-4" />
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3">
        <LocaleSelect />
        <UColorModeSwitch />
        <SoundSwitch />
      </div>
    </div>
  </ClientOnly>
</template>
