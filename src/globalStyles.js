import { createGlobalStyle } from "styled-components";

import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 45rem;
  }

  #root {
    display: flex;
    background: linear-gradient(to bottom, #c06c84da, #6c5b7bda);
  }

  #link {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[3]}px;
    text-decoration: none;
    box-sizing: border-box;
    transition: 0.5s all;
    border: 2px solid transparent;
    outline: none;

    &:hover,
    &:focus {
      border-bottom: 2px solid ${theme.colors.white};
    }
  }
`;
