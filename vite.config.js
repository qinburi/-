import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: "app.html",
      output: {
        entryFileNames: "assets/app.js",
        assetFileNames: "assets/app.[ext]"
      }
    }
  }
});
