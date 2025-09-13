import * as Localisation from 'react-native-localize';
import i18next from 'i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {translation: en},
  hi: {translation: hi},
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const locales = Localisation.findBestLanguageTag(Object.keys(resources));
    callback(locales.languageTag || 'en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
