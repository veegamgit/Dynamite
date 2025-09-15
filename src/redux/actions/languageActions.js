/* eslint-disable prettier/prettier */
import {updateBaseUrl} from '../../utilities/urls';
import i18next from 'i18next';

export const startLanguageChange = () => ({
  type: 'LANGUAGE_CHANGE_START',
});

export const completeLanguageChange = () => ({
  type: 'LANGUAGE_CHANGE_COMPLETE',
});

export const setLanguage = language => {
  return async dispatch => {
    try {
      // Start loading
      dispatch(startLanguageChange());

      // Update the BaseUrl when language changes
      updateBaseUrl(language);

      // Set the new language in Redux
      dispatch({
        type: 'SET_LANGUAGE',
        payload: language,
      });

      // Update i18next language
      const i18nLang = language === 'हिंदी' ? 'hi' : 'en';
      await i18next.changeLanguage(i18nLang);

    } catch (error) {
      console.error('Error changing language:', error);
    }
  };
};
