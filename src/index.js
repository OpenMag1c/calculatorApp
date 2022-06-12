import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import Layouts from "./layouts";
import {
  getThemeFromStorage,
  saveThemeToStorage,
} from "./helpers/localStorage/theme";
import ErrorBoundary from "./components/ErrorBoundary";
import GlobalStyles from "./themes/globalStyles";
import ThemeContext from "./helpers/themeContext";
import "./helpers/i18n/i18n";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: getThemeFromStorage().theme,
    };
  }

  toggleTheme = (theme) => {
    this.setState({ theme: theme.theme });
    saveThemeToStorage(theme);
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={this.toggleTheme}>
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
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
