import styled from "styled-components";

const StyledButton = styled.button`
  height: 4rem;
  width: 4rem;
  margin: 0.4rem;
  flex-basis: 14%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  box-shadow: inset -0.5rem -0.5rem 0.5rem
    ${({ theme }) => theme.colors.lightGray};
  transition: 0.2s all;
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.below.xs`
    height: 4.5rem;
    width: 4.5rem;
    margin: 0 0.5rem;
    border-radius: 1rem;
    font-size: ${theme.fontSizes[4]}px;
  `};

  ${({ theme }) => theme.above.xs`
    height: 4.5rem;
    width: 4.5rem;
    margin: 0 0.8rem;
    border-radius: 1rem;
    font-size: ${theme.fontSizes[4]}px;
  `};

  ${({ theme }) => theme.above.small`
    height: 5rem;
    width: 5rem;
    margin: 0 0.9rem;
    font-size: ${theme.fontSizes[5]}px;
  `};

  ${({ theme }) => theme.above.med`
    height: 6.5rem;
    width: 6.5rem;
    margin: 0.5rem 1.3rem;
    font-size: ${theme.fontSizes[6]}px;
  `};

  ${({ theme }) => theme.above.large`
    height: 7rem;
    width: 7rem;
    margin: 0.5rem 1.5rem;
    font-size: ${theme.fontSizes[6]}px;
  `};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightGray};
    box-shadow: inset -0.5rem -0.5rem 0.5rem
      ${({ theme }) => theme.colors.light};
  }
`;

export default StyledButton;
