import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "constants/router";
import { withTranslation } from "react-i18next";
import { Container, Title, Navbar, LinkWrapper } from "./components";

const setActiveLinkStyle = ({ isActive }) => {
  if (isActive) {
    return {
      borderBottom: "2px solid white",
    };
  }
  return {};
};

class Header extends React.PureComponent {
  render() {
    const { t } = this.props;
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
}

export default withTranslation()(Header);
