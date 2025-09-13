/* eslint-disable prettier/prettier */
import {updateBaseUrl} from '../../utilities/urls';

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

      // Set the new language
      dispatch({
        type: 'SET_LANGUAGE',
        payload: language,
      });
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };
};
