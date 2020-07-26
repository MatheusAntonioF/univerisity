import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Nunito', sans-serif;
    background: #191622;
  }
`;
