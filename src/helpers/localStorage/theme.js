import themes from "constants/themes";
import keys from "./keys";

export const getThemeFromStorage = () =>
  window.localStorage.getItem(keys.theme) || themes.lightTheme;

export const setThemeToStorage = (theme) =>
  window.localStorage.setItem(keys.theme, theme);
