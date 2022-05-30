import React from "react";
import theme from "theme";
import Spinner, { Wrapper } from "./components";

const LOADER_SIZE = 100;

function Loader() {
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
}

export default Loader;
