import type { StorybookConfig } from '@storybook/react-vite';

import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

const STORIES_PATH_PATTERN = 'src/**/*.stories.@(js|jsx|ts|tsx|mdx)';
const MDX_STORIES_PATH_PATTERN = 'src/**/*.@(mdx)';

const config: StorybookConfig = {
  stories: [
    `../../../apps/platform-services/${STORIES_PATH_PATTERN}`,
    `../../i18n-utils/${STORIES_PATH_PATTERN}`,
    `../../i18n-utils/${MDX_STORIES_PATH_PATTERN}`,
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  // staticDirs: [
  //   '../../shared/common-ui/src/assets',
  //   { from: '../../shared/core/src/assets/mockServiceWorker.js', to: 'mockServiceWorker.js' },
  // ],
  viteFinal: async config =>
    mergeConfig(config, {
      plugins: [
        react(),
        nxViteTsPaths(),
        visualizer({
          template: 'treemap',
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
      ],
      build: {
        chunkSizeWarningLimit: 1700,
        sourcemap: true,
        reportCompressedSize: true,
      },
      // resolve: {
      //   alias: {
      //     '@': resolve(__dirname, '../../shared/common-ui/src/styles'),
      //     '@styles': resolve(__dirname, '../../shared/common-ui/src/styles/index.scss'),
      //   },
      // },
      optimizeDeps: {
        include: ['@storybook/theming', '@storybook/blocks'],
      },
    }),
};

export default config;
