export default {
  mounted(el: HTMLElement, binding: any) {
    const value = binding.value || {}

    const blur = value.blur ?? 10
    const saturate = value.saturate ?? 1.2

    const filter = `blur(${blur}px) saturate(${saturate})`

    el.style.backdropFilter = filter

    // 可选：自动加透明背景
    if (!el.style.background) {
      // el.style.background = 'rgba(255,255,255,0.2)'
    }
  }
}
