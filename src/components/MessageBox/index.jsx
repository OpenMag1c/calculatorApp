import React from "react";
import { IconError } from "components/icons";
import StyledDiv from "./components";

function MessageBox({ message }) {
  return (
    <StyledDiv>
      <IconError />
      {message}
    </StyledDiv>
  );
}

export default MessageBox;
