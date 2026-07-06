import { defineConfig } from "vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

function copyAppHtmlToIndex() {
  return {
    name: "copy-app-html-to-index",
    closeBundle() {
      copyFileSync(resolve("docs/app.html"), resolve("docs/index.html"));
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [copyAppHtmlToIndex()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: "app.html",
      output: {
        entryFileNames: "assets/app.js",
        assetFileNames: "assets/app.[ext]"
      }
    }
  }
});
