import styled from 'styled-components';
import MainList from '@components/MainPage/NoFollow/MainList';
import Feed from '@components/MainPage/HaveFollow/Feed';
import useFakeFeedList from '@hooks/useFakeFeedList';
const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: stretch;
  margin: 0;
  padding: 0;
`;
const MaincContainer = styled.section`
  max-width: 470px;
  width: 100%;
  margin: auto;
  margin-top: ${({ theme }) => theme.space.md};
`;
const MainTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;
const Maincontent = styled.div`
  margin-top: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;
function BaseMain() {
  const fakeFeedList = useFakeFeedList();
  console.log('fakeFeedList', fakeFeedList);
  return (
    <Main>
      <div>
        <MaincContainer>
          <MainTitle>회원님을 위한 추천</MainTitle>
          <Maincontent>
            <MainList />
          </Maincontent>
          <Maincontent>
            {fakeFeedList.map((feedItem, key) => (
              <Feed {...feedItem} key={key} />
            ))}
          </Maincontent>
        </MaincContainer>
      </div>
    </Main>
  );
}

export default BaseMain;
