import React from "react";
import StyledButton from "./components";

function ControlButton(props) {
  const { text } = props;
  return <StyledButton {...props}>{text}</StyledButton>;
}

export default ControlButton;
