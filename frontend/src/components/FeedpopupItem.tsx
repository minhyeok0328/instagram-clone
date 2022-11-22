import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useFakeFeedList from '@hooks/useFakeFeedList';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

const MainList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
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

const ImgList = styled.ul`
  width: 100%;
  height: 100%;
  transition: 0.5s;
  display: flex;
  position: relative;
  flex-direction: row;
  > li {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.black};
    > div {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding-top: 75%;
      height: 0;
      > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(50%, 50%);
        height: 100%;
        > img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;
const nextstyle = {
  right: '0',
};
interface List {
  Count: Number;
  setCount: Function;
}
function FeedpopupItem({ Count, setCount }: List) {
  const [nextbtn, Setnext] = useState(true);
  const [prevbtn, Setprev] = useState(false);
  const fakeFeedList = useFakeFeedList();
  console.log(fakeFeedList.length);
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
  const state = useSelector((state: RootState) => state.bank);
  const resize = {
    width: `${state}px`,
    height: `${state}px`,
  };
  const styled = {
    width: `calc(${fakeFeedList.length} * 100%)`,
    transform: `translateX(calc((-${state}px) * ${Count} ))`,
  };
  return (
    <MainList>
      <ImgList style={styled}>
        {fakeFeedList.map((feedimg, key) => (
          <li style={resize}>
            <div>
              <div>
                <img src={feedimg.image} key={key} alt="" />
              </div>
            </div>
          </li>
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
export default FeedpopupItem;
