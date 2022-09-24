import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FollowerListReply from '@components/FeedReply';
import useInput from '@hooks/useInput';
import useListCount from '@hooks/useListCount';
import FeedItem from '@components/FeedItem';
import { useParams } from 'react-router-dom';

const FeedContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  margin: auto;
  justify-content: center;
  position: fixed;
  top: 30%;
  left: 10%;
  width: fit-content;
`;
const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    align-items: center;
    :nth-child(1) {
      display: flex;
      margin: 8px 4px 8px 12px;
      max-width: calc(100% - 48px);
    }
    :nth-child(1) {
      > div:nth-child(2) {
        font-size: 14px;
      }
    }
    :nth-child(2) {
      display: flex;
      padding-right: ${({ theme }) => theme.space.xs};
      align-items: center;
      > button {
        border: none;
        padding: ${({ theme }) => theme.space.sm};
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
const ListMain = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  max-width: 640px;
`;
const UserIcon = styled.div`
  margin-right: ${({ theme }) => theme.space.md};
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  > div {
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    margin: auto;
  }
`;
const ListFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    padding: 0 ${({ theme }) => theme.space.md};
    font-size: 14px;
    margin-bottom: ${({ theme }) => theme.space.sm};
    :nth-child(1) {
      font-weight: bold;
    }
`;
const Comment = styled.section`
  min-width: 405px;
  max-width: 500px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const CommentContent = styled.div`
  flex: 1 auto;
`;
function Feedpopup() {
  const reply = useInput('');
  let { id } = useParams();
  const ListCount = useListCount(0);
  return (
    <>
      <FeedContent>
        <ListMain>
          <FeedItem {...ListCount}></FeedItem>
        </ListMain>
        <Comment>
          <ListHeader>
            <div>
              <UserIcon>
                <div></div>
              </UserIcon>
              <div>username,{id}</div>
            </div>
            <div>
              <button>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </ListHeader>
          <CommentContent>
            <ul></ul>
          </CommentContent>
          <ListFooterInfo>
            <div>좋아요 12개</div>
            <FollowerListReply {...reply} />
          </ListFooterInfo>
        </Comment>
      </FeedContent>
    </>
  );
}
export default Feedpopup;
