import React from "react";

import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalClose,
} from "./styles";
import propTypes from "prop-types";

function Modal(props) {
  const { title, message, onCloseModal } = props;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalClose onClick={onCloseModal}>❌</ModalClose>
        </ModalHeader>

        {message && <p>{message}</p>}

        {props.children}
      </ModalContent>
    </ModalOverlay>
  );
}

Modal.propTypes = {
  title: propTypes.string.isRequired,
  message: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Modal;
