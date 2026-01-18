// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      titleTemplate: '%s | shimamurun.dev',
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ランニングとテクノロジーで、日常とパフォーマンスを最適化する。' },
        { property: 'og:site_name', content: 'shimamurun.dev' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og/default.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-dark'
    }
  }
})
