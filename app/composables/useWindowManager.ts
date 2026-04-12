import type { Component } from 'vue'

export interface WindowInstance {
  id: string
  title: string
  component?: Component
  z?: number
  x?: number
  y?: number
  w?: number
  h?: number
}

export const useWindowManager = () => {
  const windows = useState<WindowInstance[]>('windows', () => [])
  const zIndex = useState('zIndex', () => 100)

  const openWindow = (win: Omit<WindowInstance, 'z'>) => {
    zIndex.value++
    windows.value.push({
      ...win,
      id: Date.now().toString(),
      z: zIndex.value
    })
    console.log(windows.value)
  }

  const focusWindow = (id: string) => {
    const win = windows.value.find((w) => w.id === id)
    if (!win) return

    zIndex.value++
    win.z = zIndex.value
  }

  const closeWindow = (id: string) => {
    windows.value = windows.value.filter((w) => w.id !== id)
  }

  return {
    windows,
    openWindow,
    focusWindow,
    closeWindow
  }
}
