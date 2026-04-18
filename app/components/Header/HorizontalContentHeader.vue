<script setup lang="ts">
const { isMobile } = useDevice()

useNavMobileProvider()
const { open } = useNavMobileState() || { open: ref(false) }

function handleNavMobileListItemClick() {
  open.value = false
}
</script>

<template>
  <Logo />
  <ClientOnly>
    <NavMobile v-if="isMobile">
      <template #body>
        <NavMobileList @click="handleNavMobileListItemClick" />
      </template>
    </NavMobile>
    <Nav />
    <div class="flex items-center gap-3">
      <LocaleSelect />
      <UColorModeSwitch />
      <SoundSwitch />
    </div>
  </ClientOnly>
</template>
