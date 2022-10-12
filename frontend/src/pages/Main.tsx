import { Route, Routes } from 'react-router-dom';
// import BaseMain from '@components/BaseMain';
// import Recommend from '@components/Recommend';
// import Feedpopup from '@components/Feedpopup';
import Member from '@pages/Member';

function Main() {
  return (
    <>
      <Routes>
        {/* <Route path="" element={<BaseMain />}></Route> */}
        <Route path="" element={<Member />}></Route>
        {/* <Route path="/p/:id" element={<Feedpopup />}></Route> */}
        {/* <Route path="/explore" element={<Recommend />}></Route> */}
      </Routes>
    </>
  );
}

export default Main;
