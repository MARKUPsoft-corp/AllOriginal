// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  
  // Global CSS
  css: [
    '~/assets/css/main.css',
  ],
  
  // App config
  app: {
    head: {
      title: 'All Original - Boutique High-Tech Premium au Cameroun',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Découvrez notre sélection complète de produits technologiques haut de gamme. Téléphones, ordinateurs et accessoires high-tech disponibles à Douala, Cameroun.' },
        { property: 'og:title', content: 'All Original - Boutique High-Tech Premium' },
        { property: 'og:description', content: 'Découvrez notre sélection complète de produits technologiques haut de gamme au Cameroun.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://alloriginal.cm' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // Image configuration
  image: {
    quality: 80,
    format: ['webp', 'jpg', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  
  // Color mode configuration
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classPrefix: '',
    classSuffix: ''
  }
})
