import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  background: rgba(140, 138, 151, 0.6);

  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #4d4d4d;
  width: 600px;
  text-align: left;
  max-height: 350px;
  border-radius: 8px;
  padding: 16px 24px;
  position: relative;
  overflow: scroll;

  @media screen and (max-width: 975px) {
    width: 90vw;
  }
`;

export const ModalTitle = styled.h1``;

export const ModalClose = styled.button`
  background: transparent;
  border: none;
  padding: 10px 0;
  font-size: 18px;
  cursor: pointer;
  text-align: right;
  flex: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
