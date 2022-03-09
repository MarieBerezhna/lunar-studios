export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LunarStudio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
    ],
  auth: {
  strategies: {
    google: {
      clientId: '485140192524-do6q96dt97s5dtg94khielfpj9q6hdlk.apps.googleusercontent.com',
      scope: ['profile', 'email'],
      codeChallengeMethod: '',
      responseType: 'token id_token'
    },
  }
  },
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  serverMiddleware: ['~/api'],
}
