import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // This tells the Lovable builder to ignore the SSR/Worker hooks
    // that are causing the 'callHook' error
    build: {
      ssr: false,
      outDir: 'dist'
    }
  }
});