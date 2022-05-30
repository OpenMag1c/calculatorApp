import styled from "styled-components";

export const ScrollDiv = styled.div`
  margin-left: 0.5rem;
  width: 20%;
  min-width: 14rem;
  height: 100%;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem; /* ширина для вертикального скролла */
    height: 1rem; /* высота для горизонтального скролла */
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 9em;
  }

  ${({ theme }) => theme.below.small`
    margin-left: 0;
    border: none;
    height: 40%;
    width: 100%;
  `};
`;

export const Title = styled.h4`
  width: 100%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const HistoryButton = styled.button`
  width: 100%;
  min-height: 3rem;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  background-color: transparent;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0.3rem ${({ theme }) => theme.colors.black};
  }
`;
