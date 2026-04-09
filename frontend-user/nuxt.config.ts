// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-18',
  devtools: { enabled: true },

  modules: [
    '@element-plus/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],

  // Element Plus 配置
  elementPlus: {
    importStyle: 'scss',
    themes: ['dark']
  },

  // @nuxt/image 配置
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // SEO 配置
  site: {
    url: 'https://example.com',
    name: 'Nuxt4 Element Plus Demo',
    description: '基于 Nuxt 4 + Element Plus 的响应式网站示例',
    defaultLocale: 'zh-CN'
  },

  // 应用配置
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'zh-CN',
        translate: 'no'
      },
      meta: [
        { name: 'google', content: 'notranslate' }
      ]
    }
  },

  // CSS 配置
  css: ['~/assets/css/main.css']
})
