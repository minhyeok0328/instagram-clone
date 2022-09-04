import RecommendItem from '@components/RecommendItem';
import styled from 'styled-components';
const Recommend = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.white};
`;
function MainList() {
  return (
    <>
      <Recommend>
        <RecommendItem></RecommendItem>
      </Recommend>
    </>
  );
}

export default MainList;
