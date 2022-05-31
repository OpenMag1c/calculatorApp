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

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: white;
  font-family: ${({ theme }) => theme.font};
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

export const LinkWrapper = styled.div`
  margin: 0 0.3rem;
`;
