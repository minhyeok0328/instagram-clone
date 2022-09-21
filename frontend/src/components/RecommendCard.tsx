import styled from 'styled-components';
import RecommendCardItem from '@components/RecommendCardItem';
import useFakeFeedList from '@hooks/useFakeFeedList';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const CardList = styled.div`
  display: flex;
  flex-grow: 1;
  transition: 0.5s;
`;
const Recommend = styled.div`
  position: relative;
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
const Prevbtn = styled.div`
  > div {
    background-color: ${({ theme }) => theme.colors.secondfont};
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    border-radius: 50%;
  }
  text-align: center;
  line-height: 24px;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  z-index: 1;
  margin: ${({ theme }) => theme.space.sm};
  overflow: hidden;
  white-space: nowrap;
`;
const nextstyle = {
  right: '0',
};
interface List {
  Count: Number;
  setCount: Function;
}
function RecommendCard({ Count, setCount, ...props }: List) {
  const [nextbtn, Setnext] = useState(true);
  const [prevbtn, Setprev] = useState(false);
  const fakeFeedList = useFakeFeedList();
  const maxCount = fakeFeedList.length - 2;
  function Pagemove(event: String) {
    if (event === 'prev') {
      setCount((Count: number) => Count - 1);
      if (Count === 1) {
        Setprev(false);
      }
      Setnext(true);
    }
    if (event === 'next') {
      if (maxCount > Count) {
        setCount((Count: number) => Count + 1);
      }
      if (maxCount - 1 === Count) {
        Setnext(false);
      }
      Setprev(true);
    }
  }
  const styled = {
    transform: `translateX(calc(-200px * ${Count}))`,
  };
  return (
    <Recommend>
      <CardHeader>
        <div>
          <div>회원님을 위한 추천</div>
          <div>모두 보기</div>
        </div>
      </CardHeader>
      {prevbtn && (
        <Prevbtn onClick={() => Pagemove('prev')}>
          <div>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </Prevbtn>
      )}
      <CardList style={styled}>
        {fakeFeedList.map((feedItem, key) => (
          <RecommendCardItem {...feedItem} key={key}></RecommendCardItem>
        ))}
      </CardList>
      {nextbtn && (
        <Prevbtn style={nextstyle} onClick={() => Pagemove('next')}>
          <div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Prevbtn>
      )}
    </Recommend>
  );
}

export default RecommendCard;