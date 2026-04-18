type Layout = 'default' | 'vertical-header'

export function useLayoutSwitcher() {
  const layout = useState<Layout>('layout', () => 'default')

  const toggleLayout = () => {
    layout.value = layout.value === 'default' ? 'vertical-header' : 'default'
    setPageLayout(layout.value)
  }

  return {
    layout,
    toggleLayout
  }
}
