export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'perifaCode',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A comunidade de tecnologia da periferia.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    '@/assets/scss/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components/', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      brands: ['faTwitter', 'faYoutube', 'faFacebookF', 'faInstagram'],
      solid: ['faBars', 'faTimes']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxtjs/axios',
     '@nuxt/content',
     '@nuxtjs/style-resources'
   ],

  styleResources: {
    scss: ['@/components/bosons/*.scss'],
  },




  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
