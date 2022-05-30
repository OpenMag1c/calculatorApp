import keys from "constants/localStorageKeys";
import { defaultLanguage, languages } from "settings/languages";

export const getLanguageFromStorage = () => {
  const id = window.localStorage.getItem(keys.language);
  const language = languages.find((language) => language.id === id);
  return language || defaultLanguage;
};

export const saveLanguageToStorage = (language) => {
  window.localStorage.setItem(keys.language, language.id);
};
