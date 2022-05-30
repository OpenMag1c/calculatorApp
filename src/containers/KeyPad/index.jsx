import React from "react";
import { CONTROL_BUTTONS } from "constants/buttons";
import ControlButton from "components/ControlButton";
import Panel from "./components";

function KeyPad({ onPressKey }) {
  return (
    <Panel>
      {CONTROL_BUTTONS.map((button) => (
        <ControlButton
          key={button}
          type="button"
          onClick={onPressKey(button)}
          text={button}
        />
      ))}
    </Panel>
  );
}

export default KeyPad;
