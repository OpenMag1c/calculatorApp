import React from "react";

import { withTranslation } from "react-i18next";
import {
  HOME_PAGE_CC_ROUTE,
  HOME_PAGE_FC_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "constants/router";
import { Container, LinkWrapper, Navbar, NavLinkStyled, Title } from "./styled";

class Header extends React.PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Container>
        <Title>{t("names.app")}</Title>
        <Navbar>
          <LinkWrapper>
            <NavLinkStyled to={HOME_PAGE_CC_ROUTE}>
              {t("routes.homeCC")}
            </NavLinkStyled>
          </LinkWrapper>
          <LinkWrapper>
            <NavLinkStyled to={HOME_PAGE_FC_ROUTE}>
              {t("routes.homeFC")}
            </NavLinkStyled>
          </LinkWrapper>
          <LinkWrapper>
            <NavLinkStyled to={SETTINGS_PAGE_ROUTE}>
              {t("routes.settings")}
            </NavLinkStyled>
          </LinkWrapper>
        </Navbar>
      </Container>
    );
  }
}

export default withTranslation()(Header);
