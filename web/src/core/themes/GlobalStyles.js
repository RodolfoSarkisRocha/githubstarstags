import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body{
    height: 100vh;
    max-width: 100%;
    font-family: Roboto, sans-serif;  
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
