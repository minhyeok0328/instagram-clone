import RecommendItem from '@components/RecommendItem';
import useFakeFeedList from '@hooks/useFakeFeedList';
import styled from 'styled-components';

const Recommend = styled.section`
  margin: auto;
  width: 600px;
  padding-top: 60px;
  > h4 {
    font-weight: bold;
    font-size: 16px;
    padding: 0 ${({ theme }) => theme.space.md};
  }
  > div {
    border-radius: 8px;
    margin-bottom: ${({ theme }) => theme.space.md};
    margin-top: ${({ theme }) => theme.space.sm};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
function MainList() {
  const FakeFeedList = useFakeFeedList();
  return (
    <>
      <Recommend>
        <h4>추천</h4>
        <div>
          {FakeFeedList.map((feedlist, key) => (
            <RecommendItem {...feedlist}></RecommendItem>
          ))}
        </div>
      </Recommend>
    </>
  );
}

export default MainList;
