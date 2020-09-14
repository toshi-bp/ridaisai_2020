
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/2020/favicon.ico' }
    ]
  },
  router: {
    base: '/2020/',
    trailingSlash: true
  },
  generate: {
    routes: ['404']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2ca9e1' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/webfonts.js',
            '~/plugins/emptyTouchHandler.js',
            '~/plugins/vue-youtube.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-107703960-5',
        config: {
          anonymize_ip: true // anonymize IP
        }
        // debug: true, //enable to track in dev mode
      }
    ],
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit'
  ],
  styleResources: {
    scss: ['./assets/style/styleResources/*.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  pwa: {
    manifest: {
      name: '2020年度野田地区理大祭',
      lang: 'ja',
      useWebmanifestExtension: false
    },
    workbox: {
      dev: true //開発環境でもPWA
    }
  }
}
