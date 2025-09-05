import {BASE_URLS} from './urls';
import {useLanguage} from './languageContext';

// Store the current language and baseURL
let currentLanguage = 'en';
let currentBaseURL = BASE_URLS[currentLanguage];

// Function to update the current language and baseURL immediately
export const updateApiLanguage = newLanguage => {
  currentLanguage = newLanguage;
  currentBaseURL = BASE_URLS[newLanguage];
};

// Regular function for use in action creators
export const makeRequest = async (endpoint, options = {}) => {
  // Use the cached baseURL for immediate access
  const baseURL = currentBaseURL;
  try {
    const response = await fetch(baseURL + endpoint, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};

// Hook for use in React components
export const useApi = () => {
  const {language} = useLanguage();

  // Keep the makeRequest function in sync with the current language
  updateApiLanguage(language);
  const baseURL = BASE_URLS[language];

  const request = async (endpoint, options = {}) => {
    try {
      const response = await fetch(baseURL + endpoint, {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  };

  return {request};
};
