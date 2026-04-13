import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    'lenis/nuxt',
    'nuxt-gtag',
    '@vueuse/nuxt',
    '@nuxt/a11y',
    '@nuxt/icon',
    '@nuxt/fonts'
  ],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Maple Mono', src: '/fonts/MapleMono-NF-CN-Regular.ttf' }
    ]
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
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en'
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        files: ['en/index.ts']
      },
      {
        code: 'zh-CN',
        name: '中文',
        files: ['zh/index.ts']
      }
    ]
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

  typescript: {},

  imports: {
    dirs: ['~/components/**/**']
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
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  }
})
