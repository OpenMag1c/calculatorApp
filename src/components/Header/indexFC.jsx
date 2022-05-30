import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "constants/router";
import { useTranslation } from "react-i18next";
import { Container, Title, Navbar, LinkWrapper } from "./components";

const setActiveLinkStyle = ({ isActive }) => {
  if (isActive) {
    return {
      borderBottom: "2px solid white",
    };
  }
  return {};
};

function Header() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("names.app")}</Title>
      <Navbar>
        <LinkWrapper>
          <NavLink to={HOME_PAGE_ROUTE} style={setActiveLinkStyle} id="link">
            {t("routes.home")}
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink
            to={SETTINGS_PAGE_ROUTE}
            style={setActiveLinkStyle}
            id="link"
          >
            {t("routes.settings")}
          </NavLink>
        </LinkWrapper>
      </Navbar>
    </Container>
  );
}

export default React.memo(Header);