import React from 'react';
import ModalContainer from "./styled";

const Modal = ({ children, handleCloseMenu }) => {
  return (
    <ModalContainer className="modalContainer" onClick={handleCloseMenu}>
      { children }
    </ModalContainer>
  );
};

export default Modal;