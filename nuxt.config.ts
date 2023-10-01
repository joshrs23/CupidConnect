// https://nuxt.com/docs/api/configuration/nuxt-config
import modules from './modules'


export default ({
  ...modules,
  serverMiddleware: [
    '~/middleware/cors'
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    'bootstrap/dist/css/bootstrap.css',
  ],
  buildModules: [
    // Add the @nuxtjs/google-fonts module
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Lovers Quarrel': true,
    },
    display: 'swap', // Specify your desired display option
  },
  head: {
    // Add the Google Fonts <link> tag here
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap',
      },
    ],
  },
})

