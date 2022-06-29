import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  font-family: 'Mulish', Arial, Helvetica, sans-serif !important;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  color: ${(props) => props.theme.colors.item100};
  background-color: ${(props) => props.theme.colors.bg20};
}
`;
