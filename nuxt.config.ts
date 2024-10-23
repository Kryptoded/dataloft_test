// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      link: [
        {rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'}
      ]
    }
  }
})