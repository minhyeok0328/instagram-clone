import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    > img {
      object-fit: cover;
      width: calc(${window.innerWidth}px - 64px - 64px - 405px);
      max-width: calc(${window.innerWidth}px - 64px - 64px - 405px);
      max-height: calc(100vh - 40px);
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
function FeedItem({ Count, setCount }: List) {
  const [nextbtn, Setnext] = useState(true);
  const [prevbtn, Setprev] = useState(false);
  const [resize, setresize] = useState({});
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
  const handleResize = () => {
    setresize({
      width: `calc(${window.innerWidth}px - 64px - 64px - 405px)`,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <MainList>
      <ImgList style={styled}>
        {fakeFeedList.map((feedimg, key) => (
          <div>
            <img src={feedimg.image} key={key} alt="" style={resize} />
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
