import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layouts from "layouts";
import App from "App/indexFC";
import GlobalStyles from "globalStyles";
import {
  getThemeFromStorage,
  saveThemeToStorage,
} from "helpers/localStorage/theme";
import ThemeContext from "helpers/themeContext";
import ErrorBoundary from "components/ErrorBoundary";
import "helpers/i18n/i18n";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: getThemeFromStorage().theme,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme = (theme) => {
    this.setState({ theme: theme.theme });
    saveThemeToStorage(theme);
  }

  render() {
    return (
      <ThemeContext.Provider value={this.toggleTheme}>
        <ThemeProvider theme={this.state.theme}>
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
