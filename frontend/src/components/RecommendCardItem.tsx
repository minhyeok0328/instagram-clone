import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  height: 216px;
  width: 200px;
  flex: 0 0 auto;
  flex-direction: column;
  > div {
    width: 176px;
    margin: auto;
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 4px;
  }
`;
const CardContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  div:nth-child(3) {
    margin-bottom: ${({ theme }) => theme.space.xs};
    font-weight: bold;
  }
  div:nth-child(4) {
    color: ${({ theme }) => theme.colors.secondfont};
    margin-bottom: ${({ theme }) => theme.space.sm};
    width: 100%;
    text-align: center;
    min-height: 28px;
    padding-top: ${({ theme }) => theme.space.xs};
    > span {
      padding: ${({ theme }) => theme.space.sm} 0;
    }
  }
  div:nth-child(5) {
    margin-left: ${({ theme }) => theme.space.sm};
    display: flex;
    align-items: center;
    button {
      background-color: ${({ theme }) => theme.colors.button};
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid transparent;
      padding: 5px 9px;
      border-radius: 4px;
      cursor: pointer;
      > div {
        padding: 0 ${({ theme }) => theme.space.md};
        font-size: 14px;
        font-weight: bold;
        @media (max-width: 640px) {
          padding: 0;
        }
      }
    }
  }
`;
const UserIcon = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
  > div {
    width: 54px;
    height: 54px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    margin: auto;
  }
`;
const Clolse = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${({ theme }) => theme.space.sm};
`;

function RecommendCardItem() {
  return (
    <Card>
      <div>
        <CardContent>
          <Clolse>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </Clolse>
          <UserIcon>
            <div></div>
          </UserIcon>
          <div>이승민은 일해라</div>
          <div>
            <span>추천이유</span>
          </div>
          <div>
            <button>
              <div>팔로우</div>
            </button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
export default RecommendCardItem;
