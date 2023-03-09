// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  alias: {
    "@": "/<rootDir>",
  },
  css: ["@/assets/style/reset.css", "@/assets/style/global.scss"],
});
