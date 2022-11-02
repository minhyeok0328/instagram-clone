import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FollowerListReply from '@components/FeedReply';
import useInput from '@hooks/useInput';
import useListCount from '@hooks/useListCount';
import FeedItem from '@components/FeedItem';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Feedcontroller = styled.div`
  position: fixed;
  z-index: 1;
  flex-direction: column;
  display: flex;
`;
const FeedContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  margin: auto;
  z-index: 2;
  position: fixed;
  justify-content: center;
  max-width: calc(${window.innerWidth}px - 64px - 64px);
  min-height: 405px;
  max-height: calc(100vh - 40px);
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
  overflow: hidden;
  width: calc(100% - 405px);
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
  max-width: 480px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const CommentContent = styled.div`
  flex: 1 1 auto;
`;
const PopupBackground = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.4;
  > span {
    position: fixed;
    cursor: pointer;
    z-index: 1;
    top 15px;
    right: 15px;
    color: ${({ theme }) => theme.colors.white};
    c
  }
`;
function Feedpopup() {
  const reply = useInput('');
  let { id } = useParams();
  const ListCount = useListCount(0);
  const Navigate = useNavigate();
  const [resize, setresize] = useState({});
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  function feedClose() {
    Navigate('/');
  }
  const handleResize = () => {
    setresize({
      maxWidth: `calc(${window.innerWidth}px - 64px - 64px)`,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <PopupBackground onClick={feedClose}>
        <span>X</span>
      </PopupBackground>
      <Feedcontroller>
        <FeedContent style={resize}>
          <ListMain>
            <FeedItem {...ListCount} />
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
      </Feedcontroller>
    </>
  );
}
export default Feedpopup;
