import lightTheme from "../themes/lightTheme";
import { DARK_THEME, LIGHT_THEME } from "../themes/themes";
import darkTheme from "../themes/darkTheme";

export const themes = [
  {
    id: "light",
    theme: lightTheme,
    name: LIGHT_THEME,
  },
  {
    id: "dark",
    theme: darkTheme,
    name: DARK_THEME,
  },
];

export const defaultTheme = themes[0];
