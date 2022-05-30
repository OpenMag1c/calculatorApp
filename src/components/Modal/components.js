import styled from "styled-components";

export const WrapperModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
`;

export const InnerModal = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  transform: scale(0.5);
  transition: 0.4s all;
`;
