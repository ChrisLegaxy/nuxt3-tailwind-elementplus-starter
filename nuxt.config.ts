// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  vite: {
    plugins: [ElementPlus()],
  },
  build: {
    transpile: ["element-plus/es"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.css"],
});
