import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin:0;
    padding:0;
    font-family:sans-serif;
  }
`;

export default GlobalStyle;
