import { createInjectionState } from '@vueuse/core'

const [useNavMobileProvider, useNavMobileState] = createInjectionState(() => {
  const open = ref(false)

  const toggle = () => {
    open.value = !open.value
  }

  return {
    open,
    toggle
  }
})

export { useNavMobileProvider, useNavMobileState }
