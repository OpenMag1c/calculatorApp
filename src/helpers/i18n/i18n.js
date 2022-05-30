import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getLanguageFromStorage } from "helpers/localStorage/language";
import ru from "locals/ru";
import en from "locals/en";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: getLanguageFromStorage(),
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en,
      ru,
    },
  });

export default i18n;
