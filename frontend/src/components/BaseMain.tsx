import styled from 'styled-components';
import RecommendCard from '@components/RecommendCard';
const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  > div {
    display: flex;
    margin: auto;
    padding-top: ${({ theme }) => theme.space.md};
  }
  align-items: stretch;
  margin: 0;
  padding: 0;
`;
const MaincContainer = styled.section`
  width: 100%;
  margin: auto;
  @media (min-width: 1000px) {
    margin-right: ${({ theme }) => theme.space.md};
  }
`;
// const MainTitle = styled.h4`
//   font-size: 16px;
//   font-weight: bold;
// `;
const Maincontent = styled.div`
  margin: auto;
  margin-top: ${({ theme }) => theme.space.sm};
  border-radius: 8px;
  width: 470px;
  margin: auto;
`;
function BaseMain() {
  // const fakeFeedList = useFakeFeedList();
  return (
    <Main>
      <div>
        <MaincContainer>
          {/* <Maincontent>
            {fakeFeedList.map((feedItem, key) => (
              <Feed {...feedItem} key={key} />
            ))}
          </Maincontent> */}
          <Maincontent>
            <RecommendCard></RecommendCard>
          </Maincontent>
        </MaincContainer>
        {/* <Sidemenu /> */}
      </div>
    </Main>
  );
}

export default BaseMain;
