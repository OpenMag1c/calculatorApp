import React, { useState } from "react";

import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./styled";
import IconAwesome from "../IconAwesome";
import { ICON_DOWN_ARROW } from "../../constants/icons";

const DropDownMenu = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selected.name}
        <IconAwesome className={ICON_DOWN_ARROW} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem key={option.id} onClick={onOptionClicked(option)}>
                {option.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default React.memo(DropDownMenu);
