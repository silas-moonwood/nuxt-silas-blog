import { useBreakpoints } from '@vueuse/core'

export const useDevice = () => {
  const bp = useBreakpoints({
    mobile: 0,
    tablet: 768,
    desktop: 1024
  })

  return {
    isMobile: bp.smaller('tablet'),
    isTablet: bp.between('mobile', 'desktop'),
    isDesktop: bp.greater('desktop')
  }
}
