import styled from "styled-components";

export const Container = styled.div`
  height: 8%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: white;
  font-family: ${({ theme }) => theme.font};
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  margin-right: 10px;
`;
