import React from 'react';
import ModalContainer from "./styled";

const Modal = ({ children, handleCloseMenu }) => {
  return (
    <ModalContainer className="modalContainer" onClick={document.getElementsByClassName('modalContainer') ? handleCloseMenu : ''}>
      { children }
    </ModalContainer>
  );
};

export default Modal;