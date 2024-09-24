import i18nConfiguration from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES, NAMESPACES_LIST } from '@platform-services-ui/i18n-utils';
import { resources } from '@platform-services-ui/i18n-utils/assets/locales/index.ts';

i18nConfiguration
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    ns: NAMESPACES_LIST,
    supportedLngs: LANGUAGES.map(language => language.value),
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export { i18nConfiguration };
