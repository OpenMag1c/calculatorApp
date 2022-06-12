import React from "react";
import IconAwesome from "../IconAwesome";
import { StyledDiv } from "./styled";
import { ICON_ERROR } from "../../constants/icons";

const MessageBox = ({ message }) => {
  return (
    <StyledDiv>
      <IconAwesome className={ICON_ERROR} />
      {message}
    </StyledDiv>
  );
};

export default MessageBox;
