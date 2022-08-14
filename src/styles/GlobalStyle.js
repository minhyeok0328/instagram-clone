import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${({ theme }) => theme.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
