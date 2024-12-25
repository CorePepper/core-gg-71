// vite.config.ts

import { defineConfig } from "vite"; 
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

export default defineConfig(({ mode }) => ({
  // カスタムドメインのルート直下で使うなら "/" を指定
  // GitHub Pagesのサブディレクトリ配下で使う場合は "/core-gg-71/" のようにする
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-toast", "@radix-ui/react-tooltip"],
        },
      },
    },
  },
}));
