import styled from "styled-components";

export const Panel = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  overflow-y: scroll;
`;
