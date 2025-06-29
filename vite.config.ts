// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/terminal-ui/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {

      },
    },
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  build: {
    outDir: 'build',
  },
});