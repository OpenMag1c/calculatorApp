import React from "react";
import useThemeSettings from "hooks/useThemeSettings";
import useLanguageSettings from "hooks/useLanguageSettings";
import DropDownMenu from "components/DropDown";
import { themes } from "settings/themes";
import { languages } from "settings/languages";
import { Title, Wrapper } from "./styled";

const Settings = () => {
  const { theme, changeTheme } = useThemeSettings();
  const { t, changeLanguage, language } = useLanguageSettings();

  return (
    <Wrapper>
      <Title>{t("routes.settings")}</Title>
      <DropDownMenu
        options={themes}
        selected={theme}
        setSelected={changeTheme}
      />
      <DropDownMenu
        options={languages}
        selected={language}
        setSelected={changeLanguage}
      />
    </Wrapper>
  );
};

export default Settings;
