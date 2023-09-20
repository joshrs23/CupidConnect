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
    '@fortawesome/fontawesome-free/css/all.css'
  ],
})