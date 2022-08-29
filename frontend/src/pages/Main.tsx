import BaseMain from '@components/BaseMain';
import { Route, Routes } from 'react-router-dom';
function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseMain />}></Route>
      </Routes>
    </>
  );
}

export default Main;
