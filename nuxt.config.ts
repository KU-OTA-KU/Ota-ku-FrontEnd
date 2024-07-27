// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: { enabled: true },

    plugins: ['~/plugins/nprogress.ts', '~/plugins/statusBar.ts', '~/plugins/navigationBar.ts'],
    modules: [
      "nuxt-gtag",
      "@nuxtjs/ionic",
      '@nuxtjs/tailwindcss',
      '@nuxtjs/robots',
      '@nuxt/image',
    ],

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
        `~/assets/variables.css`,
        '~/assets/nprogress.css',
    ],

    build: {
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