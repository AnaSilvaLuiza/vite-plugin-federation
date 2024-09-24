import './preview.scss';
import {
  withLocalizationDecorator,
  withLocaleDecorator,
  withQueryClientDecorator,
  withRouterDecorator,
} from '@olmero/core';
import { withCommonUIThemeDecorator } from '@olmero/common-ui';

export const tags = ['autodocs'];
export const decorators = [
  withCommonUIThemeDecorator,
  withLocalizationDecorator,
  withLocaleDecorator,
  withQueryClientDecorator,
  withRouterDecorator,
];

// initialize({
//   onUnhandledRequest: 'bypass',
//   serviceWorker: {
//     url: './mockServiceWorker.js',
//   },
// });

const preview: Preview = {
  // loaders: [mswLoader],
  parameters: {
    decorators,
    tags,
    options: {
      storySort: {
        order: ['Base', ['Pages'], 'Internationalization', ['Intro', 'Plurals', 'Components'], '*', 'WIP'],
      },
    },
  },
};

export default preview;
