import lightTheme from "assets/lightTheme";
import darkTheme from "assets/darkTheme";
import { DARK_THEME, LIGHT_THEME } from "locals/themes";

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
