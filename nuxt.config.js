
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
    // routes: ['404']
    // ↓ページの自動生成を試みたがその場合個別で編集ができなくなるため今回は使わない。
    // routes () {
    //   return KikakuList.filter(kikaku => kikaku.kikaku_id).map((kikaku) => {
    //     return {
    //       route: '/kikaku/' + kikaku.kikaku_id + '/'
    //     }
    //   })
    // }
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
    '~/plugins/vue-youtube.js',
    '~/plugins/smoothScroll.js',
    '~/plugins/vue-scrollto.js'
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
    'nuxt-vuex-localstorage',
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
    },
    extend: ({ module, output }) => {
      // rulesの先頭に追加
      module.rules.unshift({
        test: /\.worker\.js$/,
        loader: 'worker-loader'
      })

      // HMR時にWebWorkerでWindow is not definedになる問題対策らしい(参考文献:qiita)
      output.globalObject = 'this'
    }
  },
  pwa: {
    manifest: {
      name: '2020年度野田地区理大祭',
      lang: 'ja',
      useWebmanifestExtension: false
    },
    workbox: {
      dev: true // 開発環境でもPWA
    }
  },
  pwa: {
    manifest: {
      name: '2020年度野田地区理大祭',
      lang: 'ja',
      useWebmanifestExtension: false
    },
    workbox: {
      dev: true // 開発環境でもPWA
    }
  }
}
