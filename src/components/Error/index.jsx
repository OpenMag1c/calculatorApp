import React from "react";
import { useTranslation } from "react-i18next";
import StyledDiv from "./components";

function Error() {
  const { t } = useTranslation();
  return <StyledDiv>{t("error.smth")}</StyledDiv>;
}

export default Error;
