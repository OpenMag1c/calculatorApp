import React from "react";
import { CONTROL_BUTTONS } from "constants/buttons";
import ControlButton from "components/ControlButton";
import Panel from "./components";

export default React.memo(({ onPressKey }) => {
  return (
    <Panel>
      {CONTROL_BUTTONS.map((button) => (
        <ControlButton
          key={button}
          type="button"
          data-key={button}
          onClick={onPressKey}
          text={button}
        />
      ))}
    </Panel>
  );
});
