import keys from "../../constants/localStorageKeys";
import { defaultTheme, themes } from "../../settings/themes";

export const getThemeFromStorage = () => {
  const id = window.localStorage.getItem(keys.theme);
  const theme = themes.find((theme) => theme.id === id);
  return theme || defaultTheme;
};

export const saveThemeToStorage = (theme) =>
  window.localStorage.setItem(keys.theme, theme.id);
