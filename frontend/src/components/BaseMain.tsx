import styled from 'styled-components';
import RecommendCard from '@components/RecommendCard';
import useListCount from '@hooks/useListCount';
import useFakeFeedList from '@hooks/useFakeFeedList';
import Feed from '@components/Feed';
import Sidemenu from '@components/Sidemenu';
import Follow from '@components/Follow';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useEffect } from 'react';
import { RootState } from '../state/reducers';

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  > div {
    display: flex;
    margin: auto;
    padding-top: ${({ theme }) => theme.space.md};
    max-width: 820px;
  }
  align-items: stretch;
  margin: 0;
  padding: 0;
`;
const MaincContainer = styled.section`
  margin: auto;
`;
const Maincontent = styled.div`
  margin: auto;
  margin-bottom: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 470px;
  overflow: hidden;
`;
const Feddstyle = {
  margin: '16px 0',
};
function BaseMain() {
  const ListCount = useListCount(0);
  const fakeFeedList = useFakeFeedList();
  const dispatch = useDispatch();
  const { Resize } = bindActionCreators(actionCreators, dispatch);
  Resize(window.innerHeight);
  const handleResize = () => {
    let height = window.innerHeight + 500;
    Resize(height);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const List = fakeFeedList.map((feedItem, key) => {
    if (key === 2) {
      return (
        <>
          <Maincontent>
            <RecommendCard {...ListCount} key={key}></RecommendCard>
          </Maincontent>
          <Maincontent>
            <Feed {...feedItem} key={key} />
          </Maincontent>
        </>
      );
    } else {
      return (
        <Maincontent>
          <Feed {...feedItem} key={key} />
        </Maincontent>
      );
    }
  });
  return (
    <>
      <Main>
        <div>
          <MaincContainer>
            <Maincontent style={Feddstyle}>
              <Follow />
            </Maincontent>
            {List}
          </MaincContainer>
          <Sidemenu />
        </div>
      </Main>
      <Outlet />
    </>
  );
}

export default BaseMain;
