import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    margin: 0;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  @media(max-width: 768px) {
    html {
      font-size: 56.25%;
    }
  }

  @media(max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyle;