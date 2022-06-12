import React from "react";

import { withTranslation } from "react-i18next";
import { getThemeFromStorage } from "helpers/localStorage/theme";
import {
  getLanguageFromStorage,
  saveLanguageToStorage,
} from "helpers/localStorage/language";
import DropDownMenu from "components/DropDown";
import { themes } from "settings/themes";
import { languages } from "settings/languages";
import ThemeContext from "helpers/themeContext";
import { Title, Wrapper } from "./styled";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: getThemeFromStorage(),
      language: getLanguageFromStorage(),
    };
  }

  changeLanguage = (language) => {
    this.setState({ language });
    saveLanguageToStorage(language);
    const { i18n } = this.props;
    i18n.changeLanguage(language.id);
  };

  changeTheme = (theme) => {
    this.context(theme);
    this.setState({ theme });
  };

  render() {
    const { theme, language } = this.state;
    const { t } = this.props;
    return (
      <Wrapper>
        <Title>{t("routes.settings")}</Title>
        <DropDownMenu
          options={themes}
          selected={theme}
          setSelected={this.changeTheme}
        />
        <DropDownMenu
          options={languages}
          selected={language}
          setSelected={this.changeLanguage}
        />
      </Wrapper>
    );
  }
}

Settings.contextType = ThemeContext;

export default withTranslation()(Settings);
