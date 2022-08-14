import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={Home()}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
