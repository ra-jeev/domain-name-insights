export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  modules: ["@nuxthub/core", "@nuxt/eslint", "@nuxt/ui"],

  hub: {
    database: true,
    kv: false,
    blob: false,
    cache: true,
    ai: true,
  },

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  devtools: { enabled: true },

  compatibilityDate: "2024-07-26",
});
