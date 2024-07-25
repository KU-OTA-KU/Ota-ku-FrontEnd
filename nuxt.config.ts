// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',

    devtools: { enabled: true },

    plugins: ['~/plugins/nprogress.ts'],
    modules: ["nuxt-gtag", 'vuetify-nuxt-module', "@nuxtjs/ionic"],

    gtag: {
        id: 'G-XKSYJXXKPB'
    },

    vuetify: {
        moduleOptions: {
        },
        vuetifyOptions: {
            theme: {
                defaultTheme: 'dark',
                themes: {

                }
            }
        }
    },

    css: [
        '~/assets/root.scss',
        `~/assets/variables.scss`,
        'vuetify/lib/styles/main.sass',
        '~/assets/nprogress.css',
    ],

    build: {
        transpile: ['vuetify'],
        loaders: {
          vue: {
            transformAssetUrls: {
              video: 'src',
              source: 'src',
              object: 'data',
              img: 'src',
              image: 'xlink:href'
            }
          }
        },
        extractCSS: true,
        optimizeCSS: true
    },

    ionic: {
      integrations: {
        capacitor: true,
      },
      css: false
    },
})