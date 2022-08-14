import React from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '@styles/themes';
import GlobalStyle from '@styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import BaseHeader from './components/BaseHeader';

function App() {
  return (
    <>
      <ThemeProvider theme={Themes.light}>
        <GlobalStyle />
        <BaseHeader />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
