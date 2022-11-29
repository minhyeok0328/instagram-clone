import RecommendCard from '@components/RecommendCard';
import useFakeFeedList from '@hooks/useFakeFeedList';
import useListCount from '@hooks/useListCount';
import styled from 'styled-components';
import Feed from '@components/Feed';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

const Maincontent = styled.div`
  margin: auto;
  margin-bottom: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 470px;
  overflow: hidden;
`;
const MaincContainer = styled.section`
  margin: auto;
`;
function MainFeed(props: object) {
  const { height } = useWindowSize();
  const { y } = useWindowScroll();
  const FakeFeedList = useFakeFeedList();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewportY, setViewportY] = useState<number>(0);
  const offsetY = y - viewportY;
  useEffect(() => {
    const viewportY = scrollRef.current?.getBoundingClientRect().y ?? 0;
    setViewportY(viewportY);
  }, []);
  const startIndex = Math.max(Math.floor(offsetY / 600) - 10);
  const endIndex = Math.min(
    Math.ceil(height / 600 + startIndex) + 10,
    FakeFeedList.length,
  );
  const translateY = Math.max(600 * startIndex, 10);
  const ListCount = useListCount(0);
  const feedlist = Object.values(props).map((feedItem, key) => {
    if (key === 2) {
      return (
        <>
          <Maincontent>
            <RecommendCard {...ListCount} key={key}></RecommendCard>
          </Maincontent>
          <Maincontent>
            <Feed {...feedItem} key={key} />
          </Maincontent>
        </>
      );
    } else {
      return (
        <Maincontent>
          <Feed {...feedItem} key={key} />
        </Maincontent>
      );
    }
  });
  const Item = feedlist.slice(
    Math.max(startIndex, 0),
    Math.min(endIndex + 1, 20),
  );
  return (
    <MaincContainer style={{ transform: `translateY(${translateY}px)` }}>
      {Item}
    </MaincContainer>
  );
}
export default MainFeed;
