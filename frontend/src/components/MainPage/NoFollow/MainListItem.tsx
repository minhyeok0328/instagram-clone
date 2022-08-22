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
        min-height: 0;
        min-width: 0;
        > div {
          display: flex;
          > div {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
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
          <div>
            <div>usernickname</div>
          </div>
          <div>
            <div>username</div>
          </div>
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
