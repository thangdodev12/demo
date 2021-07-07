/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html, body {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;
