import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  box-sizing: border-box;
}



body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

`;

export default GlobalStyle;
