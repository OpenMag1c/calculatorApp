import { useState } from "react";
import {
  getLanguageFromStorage,
  saveLanguageToStorage,
} from "helpers/localStorage/language";
import { useTranslation } from "react-i18next";

const useLanguageSettings = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(() => getLanguageFromStorage());

  const changeLanguage = (lang) => {
    setLanguage(lang);
    saveLanguageToStorage(lang);
    i18n.changeLanguage(lang.id);
  };

  return { language, changeLanguage, t };
};

export default useLanguageSettings;
