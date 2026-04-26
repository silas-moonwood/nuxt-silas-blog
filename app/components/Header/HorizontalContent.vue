<script setup lang="ts">
const { isMobile } = useDevice()

useNavMobileProvider()
const { open } = useNavMobileState() || { open: ref(false) }

function handleNavMobileClick() {
  open.value = false
}
</script>

<template>
  <Logo />
  <ClientOnly>
    <NavMobile v-if="isMobile">
      <template #body>
        <NavMobileList @click="handleNavMobileClick" />
      </template>
    </NavMobile>
    <Nav class="gap-4 flex" />
    <div class="flex items-center gap-3">
      <LocaleSelect />
      <UColorModeSwitch />
      <SoundSwitch />
    </div>
  </ClientOnly>
</template>
