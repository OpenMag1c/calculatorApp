import React, { useContext, useState } from "react";
import { SETTINGS } from "constants/names";
import themes from "constants/themes";
import { ThemeContext } from "helpers/themeContext";
import { getThemeFromStorage } from "helpers/localStorage/theme";
import { SelectTheme, Wrapper, Title } from "./components";

export default function Settings() {
  const [theme, setTheme] = useState(getThemeFromStorage());
  const toggleTheme = useContext(ThemeContext);
  const onChangeTheme = (event) => {
    const updateTheme = event.target.value;
    toggleTheme(updateTheme);
    setTheme(updateTheme);
  };

  return (
    <Wrapper>
      <Title>{SETTINGS}</Title>
      <SelectTheme onChange={onChangeTheme} value={theme}>
        <option value={themes.lightTheme}>{themes.lightTheme}</option>
        <option value={themes.darkTheme}>{themes.darkTheme}</option>
      </SelectTheme>
    </Wrapper>
  );
}
