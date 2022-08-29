import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FollowerListReply from '@components/FeedReply';
import useInput from '@hooks/useInput';
import dayjs from 'dayjs';
const FeedContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space.md};
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
const ListMain = styled.div``;
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
  const nowdate = dayjs(Date(), 'YYYY-MM-DD HH:mm:ss.SSS');
  function Dateunit(unit: 'w' | 'd' | 'h') {
    return nowdate.diff(props.registerDate, unit);
  }
  let DayCount = `${Dateunit('w')}주전`;
  if (!Dateunit('w')) {
    DayCount = `${Dateunit('d')}일전`;
    if (!Dateunit('d')) DayCount = `${Dateunit('h')}시간전`;
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
          <div></div>
        </ListMain>
        <section>
          <ListFooterInfo>
            <div>좋아요 {props.like}개</div>
            <div>
              <div>{props.userName}</div>
              <span>&nbsp;subject...&nbsp;더보기</span>
            </div>
            <div>
              댓글 <span>{props.commentCount}</span>개 모두 보기
            </div>
            <div>
              <span>{DayCount}</span>
            </div>
          </ListFooterInfo>
          <FollowerListReply {...reply} />
        </section>
      </FeedContent>
    </>
  );
}
export default FollowerList;
