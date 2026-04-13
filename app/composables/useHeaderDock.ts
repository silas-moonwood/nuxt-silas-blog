export type HeaderDock = 'left' | 'right'

export function useHeaderDock() {
  const dock = useState<HeaderDock>('headerDock', () => 'right')

  const setHeaderDock = (next: HeaderDock) => {
    dock.value = next
  }

  const toggleHeaderDock = () => {
    dock.value = dock.value === 'left' ? 'right' : 'left'
  }

  return { dock, setHeaderDock, toggleHeaderDock }
}
