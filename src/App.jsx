import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";
import Board from "./components/Board";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Board />
    </ThemeProvider>
  );
}
