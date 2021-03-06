import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App/indexFC";
import GlobalStyles from "./themes/globalStyles";
import {
  getThemeFromStorage,
  saveThemeToStorage,
} from "./helpers/localStorage/theme";
import ThemeContext from "./helpers/themeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import "./helpers/i18n/i18n";
import Layouts from "./layouts";

const AppContainer = () => {
  const [theme, setTheme] = useState(() => getThemeFromStorage().theme);

  const toggleTheme = useCallback((newTheme) => {
    setTheme(newTheme.theme);
    saveThemeToStorage(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <BrowserRouter>
            <Layouts>
              <App />
            </Layouts>
            <GlobalStyles />
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
