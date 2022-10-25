import Error from '@components/Error';
import { Route, Routes } from 'react-router-dom';
import BaseMain from '@components/BaseMain';
import Recommend from '@components/Recommend';
import Feedpopup from '@components/Feedpopup';
import BaseHeader from '@components/BaseHeader';
function Main() {
  return (
    <>
      <BaseHeader />
      <Routes>
        <Route path="" element={<BaseMain />}>
          <Route path="/p/:id" element={<Feedpopup />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/explore" element={<Recommend />}></Route>
      </Routes>
    </>
  );
}

export default Main;
