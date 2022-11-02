import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useFakeFeedList from '@hooks/useFakeFeedList';
const MainList = styled.div`
  position: relative;
`;
const Prevbtn = styled.div`
  > div {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondfont};
    font-size: 15px;
    border-radius: 50%;
  }
  text-align: center;
  line-height: 24px;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  margin: ${({ theme }) => theme.space.sm};
  overflow: hidden;
  white-space: nowrap;
`;
const ImgList = styled.div`
  display: flex;
  transition: 0.5s;
  > div {
    width: 100%;
  }
  > img {
    object-fit: cover;
  }
`;
const nextstyle = {
  right: '0',
};
interface List {
  Count: Number;
  setCount: Function;
}
function FeedItem({ Count, setCount }: List) {
  const [nextbtn, Setnext] = useState(true);
  const [prevbtn, Setprev] = useState(false);
  const fakeFeedList = useFakeFeedList();
  const maxCount = fakeFeedList.length - 1;
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
    transform: `translateX(calc(-100% * ${Count}))`,
  };
  return (
    <MainList>
      <ImgList style={styled}>
        {fakeFeedList.map((feedimg, key) => (
          <div>
            <img src={feedimg.image} key={key} alt="" />
          </div>
        ))}
      </ImgList>
      {prevbtn && (
        <Prevbtn onClick={() => Pagemove('prev')}>
          <div>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </Prevbtn>
      )}
      {nextbtn && (
        <Prevbtn style={nextstyle} onClick={() => Pagemove('next')}>
          <div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Prevbtn>
      )}
    </MainList>
  );
}
export default FeedItem;
