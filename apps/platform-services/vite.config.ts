/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/platform-services',

  server: {
    port: 4200,
    host: 'localhost',

    proxy: {
      '/pp/api/': {
        target: 'https://ap.test.olmero.ch',
        secure: false,
        changeOrigin: true,
      },
    },
  },

  base: '/platform-services/',

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, '../../libs/shared/common-ui/src/styles'),
  //   },
  // },

  build: {
    outDir: '../../dist/apps/platform-services',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
