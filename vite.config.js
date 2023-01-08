import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: [
        'resources/scss/app.scss',
        'resources/js/app.js'
      ],
      refresh: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js/', import.meta.url))
    }
  }
});
