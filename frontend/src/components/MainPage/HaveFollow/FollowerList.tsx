import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FollowerListFooter from '@components/MainPage/HaveFollow/FollowerListFooter';
import useInput from '@hooks/useInput';

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
  margin-right: calc(${({ theme }) => theme.space.xs}*3);
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

function FollowerList(props: Feed) {
  const reply = useInput('');
  return (
    <>
      <div>
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
          <FollowerListFooter {...reply} />
        </section>
      </div>
    </>
  );
}
export default FollowerList;
