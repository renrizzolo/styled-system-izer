import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  /* import your web fonts herer */
  /* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); */

  /* add any defaults/reset you like */
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    font-family: ${props => props.theme.fonts["sans"]};
    font-size: ${props => props.theme.sizes["base"]}px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
 
  h1 {
    font-size: 3.5em;
  }
  h2 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 1.75em;
  }
  h4 {
    font-size: 1.5em;
  }
  h5 {
    font-size: 1em;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
