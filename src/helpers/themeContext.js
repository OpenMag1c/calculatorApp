import React from "react";
import { themes } from "settings/themes";

const ThemeContext = React.createContext(themes[0]);

export default ThemeContext;
