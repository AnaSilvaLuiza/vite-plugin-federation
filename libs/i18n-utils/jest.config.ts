/* eslint-disable */
export default {
  displayName: 'i18n-utils',
  preset: '../../jest.preset.ts',
  moduleNameMapper: {
    '^@platform-services-ui/i18n-utils/assets/(.*)$': '<rootDir>/src/assets/$1',
  },
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/i18n-utils',
};
