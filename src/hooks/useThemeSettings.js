import { useContext, useState } from "react";
import { getThemeFromStorage } from "helpers/localStorage/theme";
import ThemeContext from "helpers/themeContext";

const useThemeSettings = () => {
  const [theme, setTheme] = useState(() => getThemeFromStorage());
  const toggleTheme = useContext(ThemeContext);
  const changeTheme = (theme) => {
    toggleTheme(theme);
    setTheme(theme);
  };
  return { theme, changeTheme };
};

export default useThemeSettings;
