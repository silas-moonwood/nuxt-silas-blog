import { navConfig } from '~/config/nav'

export const useNav = () => {
  const { t } = useI18n()

  const nav = computed(() =>
    navConfig.map((item) => ({
      ...item,
      label: t(`app.nav.${item.key}`)
    }))
  )
  return {
    nav
  }
}
