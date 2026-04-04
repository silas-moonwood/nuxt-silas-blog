import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    'lenis/nuxt',
    'nuxt-gtag',
    '@vueuse/nuxt',
    '@nuxt/a11y',
    'nuxt-purgecss'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  ui: {
    experimental: {
      // componentDetection: true
    }
  },
  colorMode: {
    classSuffix: '', // 不要 -mode 后缀（推荐）
    preference: 'system', // 默认跟随系统
    fallback: 'light', // 系统不支持时
    storageKey: 'nuxt-color-mode'
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'zh-CN',
        name: '中文',
        file: 'zh.json'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en'
    }
  },
  a11y: {
    enabled: process.env.NODE_ENV === 'development',
    logIssues: true,
    defaultHighlight: true
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'nprogress' // CJS
      ]
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: `Silas's Little Nest`,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content: `Silas's Little Nest`
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        }
      ]
    }
  }
})
