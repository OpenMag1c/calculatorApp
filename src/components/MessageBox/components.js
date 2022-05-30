import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 24rem;
  height: 14rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  color: ${({ theme }) => theme.colors.black};
`;

export default StyledDiv;
