import styled from "styled-components";

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1280px;

  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: 0 auto;
`;

export const MainWindow = styled.div`
  height: 92%;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  background-color: ${({ theme }) => theme.colors.white};
`;
