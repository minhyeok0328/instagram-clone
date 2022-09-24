import useFakeFeedList from '@hooks/useFakeFeedList';
import styled from 'styled-components';
import FollowItem from '@components/FollowItem';

const FollowListContent = styled.div`
  padding: ${({ theme }) => theme.space.md} 0;
  display: flex;
  padding-left: ${({ theme }) => theme.space.md};
  max-width: 470px;
  margin: auto;
`;
function Follow() {
  const fakeFeedList = useFakeFeedList();
  return (
    <>
      <FollowListContent>
        {fakeFeedList.map((FeedList, key) => (
          <FollowItem {...FeedList} key={key}></FollowItem>
        ))}
      </FollowListContent>
    </>
  );
}

export default Follow;
