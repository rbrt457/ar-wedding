// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    app: {
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
                },
                {
                    name: "robots",
                    content: "none",
                },
            ],
            link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
            title: "Приглашение",
        },
    },
    css: ["/assets/fonts/fonts.css", "/assets/scss/base/_colors.scss", "/assets/scss/base/_base.scss", "/assets/scss/global/_global.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "/assets/scss/helpers/_helpers.scss";',
                },
            },
        },
    },
    runtimeConfig: {
        TELEGRAM_CHAT: process.env.TELEGRAM_CHAT,
        TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
    },
    typescript: {
        typeCheck: false,
    },
    modules: [
        "@nuxtjs/supabase",
        "@pinia/nuxt",
        "nuxt-viewport",
        "@nuxtjs/tailwindcss",
        "nuxt-icons",
        "@nuxt/image",
        ["@nuxtjs/eslint-module", { lintOnStart: false, emitError: false, emitWarning: false }],
        ["@nuxtjs/stylelint-module", { lintOnStart: false, emitError: false, emitWarning: false }],
        // https://www.npmjs.com/package/yandex-metrika-module-nuxt3
        "yandex-metrika-module-nuxt3",
    ],
    viewport: {
        breakpoints: {
            xs: 375,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1440,
            xxxl: 1900,
        },
        defaultBreakpoints: {
            desktop: "xl",
            mobile: "md",
            tablet: "xs",
        },
    },
    supabase: {
        redirect: false,
    },
    yandexMetrika: {
        id: process.env.YANDEX_METRIKA_ID,
        defer: false,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        consoleLog: false,
        trackHash: true,
        webvisor: true,
    },
});
