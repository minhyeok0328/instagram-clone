import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FollowerListReply from '@components/FeedReply';
import useInput from '@hooks/useInput';
import useListCount from '@hooks/useListCount';
import FeedpopupItem from '@components/FeedpopupItem';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../state/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`;
const Feedcontroller = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const FeedContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex: 0 0 auto;
  margin: auto;
  z-index: 2;
  flex-direction: row;
  justify-content: center;
  max-height: inherit;
  max-width: inherit;
`;

const FeedMain = styled.div`
  display: flex;
  overflow: hidden;
  max-height: calc(100vh - 40px);
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
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
const CommentFooterInfo = styled.div`
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
const CommentHeader = styled.div`
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
const CommentContent = styled.div`
  flex: 1 1 auto;
`;
const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  }
`;
function Feedpopup() {
  const reply = useInput('');
  let { id } = useParams();
  const ListCount = useListCount(0);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
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
  const { Resize } = bindActionCreators(actionCreators, dispatch);
  Resize(window.innerHeight + 500);
  function feedClose() {
    Navigate('/');
  }
  const handleResize = () => {
    let height = window.innerHeight + 500;
    Resize(height);
  };
  const state = useSelector((state: RootState) => state.bank);
  const resize = {
    width: `${state}px`,
    height: `${state}px`,
    flexBasis: `${state}px`,
    aspectRatio: '1 / 1',
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Popup>
      <PopupBackground onClick={feedClose}>
        <span>X</span>
      </PopupBackground>
      <Feedcontroller>
        <FeedContent>
          <FeedMain style={resize}>
            <FeedpopupItem {...ListCount} />
          </FeedMain>
          <Comment>
            <CommentHeader>
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
            </CommentHeader>
            <CommentContent>
              <ul></ul>
            </CommentContent>
            <CommentFooterInfo>
              <div>좋아요 12개</div>
              <FollowerListReply {...reply} />
            </CommentFooterInfo>
          </Comment>
        </FeedContent>
      </Feedcontroller>
    </Popup>
  );
}
export default Feedpopup;
