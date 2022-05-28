import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;

  ${({ theme }) => theme.below.xs`
    padding: 0;
  `};
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.below.xs`
    height: 60%;
    width: 100%;
  `};
`;

export const Heading = styled.h3``;
