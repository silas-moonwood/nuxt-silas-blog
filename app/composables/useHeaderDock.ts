export type HeaderDock = 'left' | 'right' | 'center'
export function useHeaderDock() {
  const dock = useState<HeaderDock>('headerDock', () => 'right')

  const setHeaderDock = (next: HeaderDock) => {
    dock.value = next
  }

  return {
    dock,
    setHeaderDock
  }
}
