import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0.5rem 0 0.5rem 0.5rem;

  ${({ theme }) => theme.below.small`
    padding: 0;
  `};
`;

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.below.small`
    height: 60%;
    width: 100%;
  `};
`;

export const Heading = styled.h3``;
