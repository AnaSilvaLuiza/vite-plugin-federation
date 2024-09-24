import { Language } from '@platform-services-ui/i18n-utils';

export const LANGUAGES: Omit<Language, 'flag'>[] = [
  { value: 'en', label: 'English', countryCode: 'GB', countryName: 'United Kingdom' },
  { value: 'de', label: 'Deutsch', countryCode: 'DE', countryName: 'Deutschland' },
  { value: 'de-CH', label: 'Deutsch', countryCode: 'CH', countryName: 'Schweiz' },
  { value: 'pt', label: 'Português', countryCode: 'PT', countryName: 'Portugal' },
  { value: 'sv', label: 'Svenska', countryCode: 'SE', countryName: 'Sverige' },
];
