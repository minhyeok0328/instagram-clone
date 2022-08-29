import styled from 'styled-components';
const SideRecommendItme = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  > div:nth-child(2) {
    flex: 1 1 auto;
    >div: nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
    >div: nth-child(2) {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.secondfont};
    }
  }
  > div:nth-child(3) {
    color: ${({ theme }) => theme.colors.button};
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  }
`;
const UserIcon = styled.div`
  margin-right: ${({ theme }) => theme.space.md};
  > div {
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }
`;
function SidemenuItem() {
  return (
    <SideRecommendItme>
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
        <div>팔로우</div>
      </div>
    </SideRecommendItme>
  );
}

export default SidemenuItem;
