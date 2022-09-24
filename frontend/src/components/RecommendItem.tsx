import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  > div {
    flex: 0 0 auto;
    :nth-child(2) {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      > div {
        display: flex;
      }
    }
    :nth-child(3) {
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
  }
`;
const UserId = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-wieght: bold;
  font-size: 14px;
`;
const UserName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondfont};
`;
const UserIcon = styled.div`
  margin-right: ${({ theme }) => theme.space.md};
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  > div {
    width: 44px;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    margin: auto;
  }
`;
function MainListItem(props: Feed) {
  return (
    <>
      <ListItem>
        <UserIcon>
          <div></div>
        </UserIcon>
        <div>
          <div>
            <UserId>{props.userId}</UserId>
          </div>
          <div>
            <UserName>{props.userName}</UserName>
          </div>
        </div>
        <div>
          <button>
            <div>팔로우</div>
          </button>
        </div>
      </ListItem>
    </>
  );
}
export default MainListItem;
