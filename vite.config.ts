import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "src/assets/scss"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@scss/variables";',
        silenceDeprecations: ["import", "mixed-decls", "color-functions", "global-builtin"],
      },
    },
  },
});
