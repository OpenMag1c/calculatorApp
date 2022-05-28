import styled from "styled-components";

const Panel = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Panel;
