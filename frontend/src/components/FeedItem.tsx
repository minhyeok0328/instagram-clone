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
  position: relative;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
`;
const ImgListRadio = styled.div`
  align-items: center;
  bottom: 15px;
  justify-content: center;
  left: 6px;
  pointer-events: none;
  position: absolute;
  right: 6px;
  display: flex;
  > .radioselect {
    opacity: 1;
  }
`;
const Radio = styled.div`
  border-radius: 50%;
  height: 6px;
  transition: all 0.2s ease-in-out;
  width: 6px;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.4;
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
  const List = fakeFeedList.map((feedItem, key) => {
    if (key === Count) {
      return <Radio key={key} className={'radioselect'}></Radio>;
    } else {
      return <Radio key={key}></Radio>;
    }
  });
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
      <ImgListRadio>{List}</ImgListRadio>
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
