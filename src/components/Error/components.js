import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[7]}px; ;
`;

export default StyledDiv;
