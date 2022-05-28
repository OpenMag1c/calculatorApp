import React from "react";
import themes from "constants/themes";
import lightTheme from "assets/lightTheme";
import darkTheme from "assets/darkTheme";

export const ThemeContext = React.createContext(themes.lightTheme);

export const getTheme = (theme) => {
  switch (theme) {
    case themes.lightTheme:
      return lightTheme;
    case themes.darkTheme:
      return darkTheme;
    default:
      return lightTheme;
  }
};
