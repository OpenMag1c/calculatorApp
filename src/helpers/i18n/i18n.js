import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "locals/ru";
import en from "locals/en";
import { getLanguageFromStorage } from "helpers/localStorage/language";

i18n
  // detect user language
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: getLanguageFromStorage().id,
    resources: {
      en,
      ru,
    },
  });

export default i18n;
