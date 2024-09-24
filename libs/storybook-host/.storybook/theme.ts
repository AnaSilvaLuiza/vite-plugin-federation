import { create } from '@storybook/theming/create';
import logo from './logo-storybook.svg';

export default create({
  base: 'light',
  brandTitle: 'Platform-services Storybook',
  brandImage: logo,
  brandTarget: '_self',

  // Colors
  colorPrimary: '#D81B60',
  colorSecondary: '#01579B',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#DBE0DE',
  appBorderRadius: 4,

  // Text colors
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#98a2b3',
  barSelectedColor: 'rgba(222, 38, 93, 0.8)',
  barHoverColor: '#DE265D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#01579B',
  inputTextColor: '#01579B',
  inputBorderRadius: 2,
});
