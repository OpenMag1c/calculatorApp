import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layouts from "layouts";
import App from "App";
import GlobalStyles from "globalStyles";
import {
  getThemeFromStorage,
  setThemeToStorage,
} from "helpers/localStorage/theme";
import { getTheme, ThemeContext } from "helpers/themeContext";
import ErrorBoundary from "components/ErrorBoundary";

function AppContainer() {
  const [theme, setTheme] = useState(() => getThemeFromStorage());
  const toggleTheme = useCallback((newTheme) => {
    setTheme(newTheme);
    setThemeToStorage(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={getTheme(theme)}>
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
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
