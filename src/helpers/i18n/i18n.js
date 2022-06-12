import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLanguageFromStorage } from "../localStorage/language";
import en from "../../locals/en";
import ru from "../../locals/ru";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: getLanguageFromStorage().id,
  resources: {
    en,
    ru,
  },
});

export default i18n;
