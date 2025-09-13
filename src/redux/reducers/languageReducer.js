/* eslint-disable prettier/prettier */
const initialState = {
  selectedLanguage: 'hindi', // default language
  isChangingLanguage: false,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case 'LANGUAGE_CHANGE_START':
      return {
        ...state,
        isChangingLanguage: true,
      };
    case 'LANGUAGE_CHANGE_COMPLETE':
      return {
        ...state,
        isChangingLanguage: false,
      };
    default:
      return state;
  }
};

export default languageReducer;
