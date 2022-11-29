import styled from 'styled-components';
import Sidemenu from '@components/Sidemenu';
import Follow from '@components/Follow';
import { Outlet } from 'react-router-dom';
import useFakeFeedList from '@hooks/useFakeFeedList';
import MainFeed from '@components/MainFeed';

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  > div {
    height: 100%;
    overflow: auto;
  }
  > div > div {
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
  const fakeFeedList = useFakeFeedList();
  const height = fakeFeedList.length * 600;
  const Maxheight = {
    height: `${height}px`,
  };
  return (
    <>
      <Main>
        <div>
          <div>
            <MaincContainer style={Maxheight}>
              <Maincontent style={Feddstyle}>
                <Follow />
              </Maincontent>
              <MainFeed {...fakeFeedList} />
            </MaincContainer>
            <Sidemenu />
          </div>
        </div>
      </Main>
      <Outlet />
    </>
  );
}

export default BaseMain;
