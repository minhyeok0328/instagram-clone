import React from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '@styles/themes';
import GlobalStyle from '@styles/GlobalStyle';
import Main from '@pages/Main';
import BaseHeader from '@components/BaseHeader';
function App() {
  return (
    <>
      <ThemeProvider theme={Themes.light}>
        <GlobalStyle />
        <BaseHeader />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
