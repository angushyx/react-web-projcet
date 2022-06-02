import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;

  height: 50rem;
  width: 40rem;
  top: 50%;
  right: 50%;
  transform: translate(50%, 20%);

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "100%" : "50%")};
  transition: all 0.4s;

  background-color: yellow;
`;
