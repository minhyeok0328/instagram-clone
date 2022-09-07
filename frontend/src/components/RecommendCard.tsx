import styled from 'styled-components';
import RecommendCardItem from '@components/RecommendCardItem';
const CardList = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Recommend = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: auto;
  overflow: hidden;
  padding: ${({ theme }) => theme.space.lg} 0;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 4px;
`;
const CardHeader = styled.div`
  margin: 0 ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.md}
    ${({ theme }) => theme.space.lg};
  > div {
    display: flex;
    font-size: 14px;
    font-weight: bold;
  }
  div:nth-child(1) {
    flex: 1;
    color: ${({ theme }) => theme.colors.secondfont};
  }
  div:nth-child(2) {
    color: ${({ theme }) => theme.colors.button};
  }
`;

function RecommendCard() {
  return (
    <Recommend>
      <CardHeader>
        <div>
          <div>회원님을 위한 추천</div>
          <div>모두 보기</div>
        </div>
      </CardHeader>
      <CardList>
        <RecommendCardItem></RecommendCardItem>
      </CardList>
    </Recommend>
  );
}

export default RecommendCard;
