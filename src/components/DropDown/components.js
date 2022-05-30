import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 1rem 0;
  cursor: pointer;
`;

export const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: black;
  background: white;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  margin: 0;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-top: none;
  color: black;
`;

export const ListItem = styled("li")`
  list-style: none;
  padding: 1rem;
  transition: 0.2s all;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
    color: white;
  }
`;
