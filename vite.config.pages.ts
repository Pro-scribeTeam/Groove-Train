import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist-pages',
    rollupOptions: {
      input: {
        main: './src/static-export.html'
      }
    }
  },
  publicDir: 'public'
})
