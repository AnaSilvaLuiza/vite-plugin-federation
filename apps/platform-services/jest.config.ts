/* eslint-disable */
export default {
  displayName: 'platform-services',
  preset: '../../jest.preset.ts',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleNameMapper: {
    '^@platform-services-ui/i18n-utils/assets/(.*)$': '<rootDir>/../../libs/i18n-utils/src/assets/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/platform-services',
};
