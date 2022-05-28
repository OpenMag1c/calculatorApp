import styled from "styled-components";

const StyledInput = styled.span`
  min-height: 50px;
  height: 10%;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  background-color: transparent;
  text-align: right;
  outline: none;
  border: none;

  ${({ theme }) => theme.below.xs`
    font-size: ${theme.fontSizes[6]}px;
  `};
`;

export default StyledInput;
