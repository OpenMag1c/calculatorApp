import React from "react";
import theme from "../../themes/theme";
import { Spinner, Wrapper } from "./styled";

const LOADER_SIZE = 100;

const Loader = () => {
  return (
    <Wrapper>
      <Spinner
        type="Bars"
        color={theme.colors.secondary}
        height={LOADER_SIZE}
        width={LOADER_SIZE}
      />
    </Wrapper>
  );
};

export default Loader;
