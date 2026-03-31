import type { Slots } from 'vue'

export const useForwardSlots = (slots: Slots) => {
  return Object.keys(slots)
}
