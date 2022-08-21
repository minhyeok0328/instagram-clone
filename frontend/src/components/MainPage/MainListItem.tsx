import styled from 'styled-components';
function MainListItem() {
  const MainListItem = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
    > div {
      flex: 0 0 auto;
      :nth-child(2) {
        flex: 1 1 auto;
      }
      :nth-child(3) {
        margin-left: ${({ theme }) => theme.space.sm};
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
            > div {
            }
          }
        }
      }
    }
  `;
  const UserIcon = styled.div`
    margin-right: calc(${({ theme }) => theme.space.xs}*3);
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
  return (
    <>
      <MainListItem>
        <UserIcon>
          <div></div>
        </UserIcon>
        <div>
          <div>usernickname</div>
          <div>username</div>
        </div>
        <div>
          <button>
            <div>팔로우</div>
          </button>
        </div>
      </MainListItem>
    </>
  );
}
export default MainListItem;
