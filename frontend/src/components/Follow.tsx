import styled from 'styled-components';
function FollowList() {
  const FollowListContent = styled.div`
    padding: ${({ theme }) => theme.space.md} 0;
    display: flex;
    padding-left: ${({ theme }) => theme.space.md};
    border: 1px solid ${({ theme }) => theme.colors.line};
    background-color: ${({ theme }) => theme.colors.white};
    max-width: 470px;
    margin: auto;
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
  const UserInfo = styled.div`
    text-align: center;
    width: 66px;
    > div {
      width: 60px;
      margin: auto;
      >div{:nth-child(2) { 
        font-size:12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 2px;
      }
      }
    }
  }
  `;
  return (
    <>
      <FollowListContent>
        <UserInfo>
          <div>
            <UserIcon>
              <div></div>
            </UserIcon>
            <div>UserName</div>
          </div>
        </UserInfo>
        <UserInfo>
          <div>
            <UserIcon>
              <div></div>
            </UserIcon>
            <div>UserName</div>
          </div>
        </UserInfo>
      </FollowListContent>
    </>
  );
}

export default FollowList;
