import React from "react";
import ReactDOM from "react-dom";
import { InnerModal, WrapperModal } from "./styled";

function Modal({ active, setActive, children }) {
  const clickModal = () => setActive(false);
  const stopPropagation = (event) => event.stopPropagation();

  const setActiveWrapper = () => {
    if (active) {
      return {
        opacity: "1",
        pointerEvents: "all",
      };
    }

    return {};
  };

  const setActiveInner = () => {
    if (active) {
      return {
        transform: "scale(1)",
      };
    }

    return {};
  };

  return ReactDOM.createPortal(
    <WrapperModal role="none" style={setActiveWrapper()} onClick={clickModal}>
      <InnerModal
        role="none"
        style={setActiveInner()}
        onClick={stopPropagation}
      >
        {children}
      </InnerModal>
    </WrapperModal>,
    document.getElementById("modal")
  );
}

export default Modal;
