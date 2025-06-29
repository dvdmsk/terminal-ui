// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //   @import "./src/utils/_vars.scss";
        //   @import "./src/utils/_mixins.scss";
        // `,
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