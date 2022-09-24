import BaseMain from '@components/BaseMain';
import { Route, Routes } from 'react-router-dom';
import Feedpopup from '@components/Feedpopup';
import Recommend from '@components/Recommend';

function Main() {
  return (
    <>
      <Routes>
        <Route path="" element={<BaseMain />}></Route>
        <Route path=":id" element={<Feedpopup />}></Route>
        <Route path="/explore" element={<Recommend />}></Route>
      </Routes>
    </>
  );
}

export default Main;
