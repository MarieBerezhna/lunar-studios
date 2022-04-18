require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lunar Studios',
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
    fontawesome: {
      icons:{
        solid:true,
        regular: true,
        brands:true
      }
    },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js',
    { src: '~/plugins/axios.js', ssr: true },
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
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
    ],
  auth: {
    redirect: {
      login: '/admin',
      logout: '/',
      callback: '/admin',
      home: '/admin'
    },
    strategies: {
      google: {
        clientId: process.env.GOOGLE_AUTH_CLIENTID,
        codeChallengeMethod: '',
        responseType: 'token id_token',
        redirect_uris: ['http://localhost:3000/admin', 'https://lunar-studios.herokuapp.com/admin']
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
