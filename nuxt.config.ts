// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',

    devtools: { enabled: true },

    plugins: ['~/plugins/nprogress.ts'],
    modules: ["nuxt-gtag", 'vuetify-nuxt-module'],

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
    ],

    build: {
        transpile: ['vuetify'],
    },

    router: {
      prefetchLinks: false
    },
})