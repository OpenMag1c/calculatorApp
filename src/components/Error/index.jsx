import React from "react";
import { useTranslation } from "react-i18next";
import StyledDiv from "./styled";

const Error = () => {
  const { t } = useTranslation();
  return <StyledDiv>{t("error.smth")}</StyledDiv>;
};

export default Error;
