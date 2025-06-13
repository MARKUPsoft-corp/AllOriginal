// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Configuration API pour communiquer avec le backend Django
  runtimeConfig: {
    // Variables privées (côté serveur uniquement)
    // cloudinaryApiSecret n'est disponible que côté serveur
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || '',
    
    // Variables publiques (accessibles côté client)
    public: {
      apiBaseUrl: 'https://alloriginal-backend.onrender.com/api',
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || 'dqwohzfae',
      cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || '529667232189611',
    }
  },
  
  // Optimisations de performance
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    crossOriginPrefetch: true,
    viewTransition: true,
  },
  
  // Optimisation de routage pour éviter les problèmes de rechargement sur mobile
  router: {
    options: {
      strict: false
    }
  },
  
  // Désactiver le cache pour les mobiles et forcer le rechargement
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      },
      '/api/**': {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    }
  },
  
  // Modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/cloudinary',
    '@nuxtjs/sitemap'
  ],
  
  // Configuration du sitemap
  sitemap: {
    hostname: 'https://alloriginal-shop.com',
    gzip: true,
    exclude: ['/debug']
  },
  
  // Configuration Cloudinary
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.CLOUDINARY_API_KEY || '',
    apiSecret: process.env.CLOUDINARY_API_SECRET || '',
    useComponent: true,
    secure: true,
    configurations: {
      allOriginalMedia: {
        quality: 'auto:best',
        fetchFormat: 'auto',
        responsive: true,
        loading: 'lazy',
        placeholder: 'blur'
      },
      profilePicture: {
        quality: 'auto:good',
        fetchFormat: 'auto',
        width: 250,
        height: 250,
        crop: 'fill',
        gravity: 'face'
      }
    }
  },
  
  // Configuration @nuxt/image pour utiliser Cloudinary
  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME || 'demo'}/image/upload/alloriginal/media/`
    },
    providers: {
      cloudinary: {
        provider: 'cloudinary',
        options: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
          apiKey: process.env.CLOUDINARY_API_KEY || '',
          apiSecret: process.env.CLOUDINARY_API_SECRET || '',
          baseURL: 'https://res.cloudinary.com/'
        }
      }
    }
  },
  
  // Global CSS
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'aos/dist/aos.css',
    '~/assets/css/main.css',
    '~/assets/css/mobile-optimizations.css',
    '~/assets/css/real-mobile-fixes.css'
  ],
  
  // Optimisation des CSS pour éviter le FOUC (Flash of unstyled content)
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";'
        }
      }
    },
    build: {
      cssCodeSplit: false,
      cssMinify: true
    }
  },
  
  // Plugins
  plugins: [
    { src: '~/plugins/bootstrap.client.js', mode: 'client' },
    { src: '~/plugins/animations.client.js', mode: 'client' },
    { src: '~/plugins/particles.client.js', mode: 'client' },
    { src: '~/plugins/admin-navigation.js', mode: 'client' },
    { src: '~/plugins/mobile-optimization.client.js', mode: 'client' },
    { src: '~/plugins/real-device-fix.client.js', mode: 'client' }
  ],
  
  // Configuration des règles de routes
  routeRules: {
    '/admin/**': { ssr: false } // Pas de redirection automatique pour éviter les boucles
  },
  
  // App config avec SEO optimisé
  app: {
    head: {
      titleTemplate: '%s | AllOriginal - Boutique High-Tech Premium au Cameroun',
      title: 'AllOriginal - Boutique High-Tech Premium au Cameroun',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AllOriginal: Boutique high-tech premium proposant des smartphones, ordinateurs, accessoires et produits tech authentiques et garantis à Douala, Cameroun. Livraison dans tout le pays.' },
        { name: 'keywords', content: 'alloriginal, high-tech, smartphone, ordinateur, accessoires, tech, cameroun, douala, premium, authentique, garanti, apple, samsung, xiaomi' },
        { name: 'author', content: 'AllOriginal Shop' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { property: 'og:site_name', content: 'AllOriginal Shop' },
        { property: 'og:title', content: 'AllOriginal - Boutique High-Tech Premium au Cameroun' },
        { property: 'og:description', content: 'Découvrez notre sélection complète de produits technologiques haut de gamme authentiques et garantis au Cameroun.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://alloriginal-shop.com' },
        { property: 'og:image', content: 'https://alloriginal-shop.com/img/alloriginal-logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AllOriginal - Boutique High-Tech Premium au Cameroun' },
        { name: 'twitter:description', content: 'Découvrez notre sélection complète de produits technologiques haut de gamme au Cameroun.' },
        { name: 'twitter:image', content: 'https://alloriginal-shop.com/img/alloriginal-logo.png' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'theme-color', content: '#ff5722' },
        { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'AllOriginal' },
        { hid: 'application-name', name: 'application-name', content: 'AllOriginal' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/smartphone-icon.svg?v=1' },
        { rel: 'apple-touch-icon', href: '/smartphone-icon.svg?v=1' },
        { rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/smartphone-icon.svg?v=1' },
        { rel: 'icon', type: 'image/svg+xml', sizes: '16x16', href: '/smartphone-icon.svg?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/google-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest?v=1' },
        { rel: 'canonical', href: 'https://alloriginal-shop.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap' }
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
