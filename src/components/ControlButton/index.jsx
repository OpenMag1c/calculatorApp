import React from "react";
import { Container, Wrapper } from "./styled";

const ControlButton = ({ text, ...otherProps }) => {
  return (
    <Wrapper>
      <Container {...otherProps}>{text}</Container>
    </Wrapper>
  );
};

export default ControlButton;
