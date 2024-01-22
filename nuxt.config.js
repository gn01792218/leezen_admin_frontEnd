// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: true,
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Sakai Vue',
            link: [
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/lara-light-indigo/theme.css'
                }
            ]
        }
    },
    modules: [
        '@pinia/nuxt',
        'nuxt-primevue'
    ],
    primevue: {
        options: { ripple: true },
        components: {
            exclude: ['Editor']
        }
    },
    script: [
        {
            strategy: 'lazyOnload',
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-93461466-1'
        },
        {
            id: 'ga-analytics',
            strategy: 'lazyOnload',
            children: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-93461466-1');
            `
        }
    ],
    css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss'],
    runtimeConfig: {
        public: {
            apiBaseUrl: 'http://172.105.204.235/api'
        }
    },
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'http://172.105.204.235',
                    changeOrigin: true
                }
            }
        }
    },
    // nitro:{
    //     devProxy:{
    //         '/api':{
    //             target:'http://172.105.204.235/api',
    //             changeOrigin:true
    //         }
    //     }
    // }
});
