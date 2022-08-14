import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    outline: none;
    border: none;
  }

  #content {
    padding-top: 60px;
  }
`;

export default GlobalStyle;
