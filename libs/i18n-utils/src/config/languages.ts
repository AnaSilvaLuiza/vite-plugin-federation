import { Language } from '@platform-services-ui/i18n-utils';
import { LANGUAGES as LANGUAGES_SIMPLE } from './languages-simple';
import GB from '@platform-services-ui/i18n-utils/assets/country-flags/GB.svg';
import CH from '@platform-services-ui/i18n-utils/assets/country-flags/CH.svg';
import DE from '@platform-services-ui/i18n-utils/assets/country-flags/DE.svg';
import PT from '@platform-services-ui/i18n-utils/assets/country-flags/PT.svg';
import SE from '@platform-services-ui/i18n-utils/assets/country-flags/SE.svg';

const COUNTRY_CODE_TO_SVG_FLAG: { [key: string]: string } = {
  GB,
  DE,
  CH,
  PT,
  SE,
};

export const LANGUAGES: Language[] = LANGUAGES_SIMPLE.map(language => ({
  ...language,
  flag: COUNTRY_CODE_TO_SVG_FLAG[language.countryCode],
}));
