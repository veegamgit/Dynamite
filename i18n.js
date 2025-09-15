import i18next from 'i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';
import {initReactI18next} from 'react-i18next';
import {store} from './src/redux/store';

const resources = {
  en: {translation: en},
  hi: {translation: hi},
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const state = store.getState();
    const currentLanguage = state.languageReducer.selectedLanguage;
    // Map the Redux store language value to i18n language code
    const langCode = currentLanguage === 'हिंदी' ? 'hi' : 'en';
    callback(langCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'hi',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
