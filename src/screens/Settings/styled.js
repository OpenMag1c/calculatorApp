import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  margin: 5rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin: 2rem 0;
`;

export const SelectTheme = styled.select`
  padding: 1rem;
  outline: none;
  cursor: pointer;
`;
