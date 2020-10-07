import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  srcDir: 'app/',
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'aLiz Nuxt\'s Template' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'images/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700;800&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/app.scss',
    '@/assets/scss/grid.scss',
    '@/assets/scss/common.scss',
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_colors.scss',
      '@/assets/scss/_fonts.scss',
      '@/assets/scss/_variables.scss',
    ],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  router: {
    middleware: [
      // 'checkLogin',
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    'nuxt-dayjs-module',
  ],
  buildModules: [
    [
      '@nuxtjs/dotenv',
      {
        filename: process.env.NODE_ENV !== 'production' ? './../.config/.env.dev' : './../.config/.env.prod',
      },
    ],
    '@nuxt/typescript-build',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },

  // router: {
  //   extendRoutes (routes, resolve) {
  //     routes.push({
  //       name: 'custom',
  //       path: '*',
  //       component: resolve(__dirname, 'pages/index.vue')
  //     })
  //   }
  // },

  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              targets: isServer
                ? { node: 'current' }
                : { browsers: ['last 2 versions'], ie: 11 },
              // corejs: { version: 2 },
            },
          ],
        ]
      },
    },
    /*
     ** You can extend webpack config here
     */
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        if (!config.module) { return } // undefinedの場合、pushせずにreturnするように追加
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      // if (!isDev) {
      //   if (!config.output) { return } // undefinedの場合、pushせずにreturnするように追加
      //   config.output.publicPath = '_nuxt/'
      // }
    },
  },
}

export default nuxtConfig
