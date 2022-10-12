import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FeedReply from '@components/FeedReply';
import useInput from '@hooks/useInput';
import dayjs from 'dayjs';
import FeedItem from '@components/FeedItem';
import useListCount from '@hooks/useListCount';
import { Link } from 'react-router-dom';

const FeedContent = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.sm};
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
  box-size: border;
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
  padding-top: ${({ theme }) => theme.space.sm};
  > div {
    padding: 0 ${({ theme }) => theme.space.md};
    font-size: 14px;
    margin-bottom: ${({ theme }) => theme.space.sm};
    :nth-child(1) {
      font-weight: bold;
    }
    :nth-child(2) {
      display: flex;
      > div {
        font-weight: bold;
      }
      > span {
        color: ${({ theme }) => theme.colors.secondfont};
      }
    }
    :nth-child(3) {
      color: ${({ theme }) => theme.colors.secondfont};
    }
    :nth-child(4) {
      margin-bottom: ${({ theme }) => theme.space.md};
      color: ${({ theme }) => theme.colors.secondfont};
      font-size: 10px;
    }
  }
`;

function FollowerList(props: Feed) {
  const reply = useInput('');
  const ListCount = useListCount(0);
  const nowdate = dayjs(Date(), 'YYYY-MM-DD HH:mm:ss.SSS');
  const week = nowdate.diff(props.registerDate, 'w');
  const day = nowdate.diff(props.registerDate, 'd');
  const hour = nowdate.diff(props.registerDate, 'h');
  let DayCount = `${week}주전`;
  if (!week) {
    DayCount = `${day}일전`;
  }
  if (!day) {
    DayCount = `${hour}시간전`;
  }
  return (
    <>
      <FeedContent>
        <ListHeader>
          <div>
            <UserIcon>
              <div></div>
            </UserIcon>
            <div>{props.userName}</div>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
        </ListHeader>
        <ListMain>
          <FeedItem {...ListCount}></FeedItem>
        </ListMain>
        <section>
          <ListFooterInfo>
            <div>좋아요 {props.like}개</div>
            <div>
              <div>{props.userName}</div>
              <span>&nbsp;subject...&nbsp;더보기</span>
            </div>
            <div>
              {props.commentCount > 0 && (
                <Link to={props.userName}>
                  댓글 {props.commentCount} 더보기
                </Link>
              )}
            </div>
            <div>
              <span>{DayCount}</span>
            </div>
          </ListFooterInfo>
          <FeedReply {...reply} />
        </section>
      </FeedContent>
    </>
  );
}
export default FollowerList;
