import React from 'react';
import { StoryFn } from '@storybook/react';
import { YupLocaleProvider } from '@platform-services-ui/i18n-utils';

export const withYupLocaleDecorator = (Story: StoryFn) => (
  <YupLocaleProvider>
    <Story />
  </YupLocaleProvider>
);

export default withYupLocaleDecorator;
