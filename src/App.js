import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Header />
        <div id='content'>
          <Routes>
            <Route path='/' element={Home()}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
