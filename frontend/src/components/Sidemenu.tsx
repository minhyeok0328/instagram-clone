import SidemenuItem from '@components/SidemenuItem';
import useFakeFeedList from '@hooks/useFakeFeedList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidemenuContainer = styled.div`
  width: 100%;
  top: 20px;
`;
const Menu = styled.div`
  max-width: 320px;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const UserIcon = styled.div`
  margin-right: ${({ theme }) => theme.space.md};
  > div {
    width: 56px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-top: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  > div:nth-child(2) {
    flex: 1 1 auto;
    margin-left: ${({ theme }) => theme.space.xs};
  }
`;
const ProfileButton = styled.div`
  color: ${({ theme }) => theme.colors.button};
  font-size: 12px;
  font-weight: bold;
`;
const SideRecommend = styled.div``;
const SideTitle = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  font-weight: 700;
  > div:nth-child(1) {
    font-size: 14px;
    flex: 1 1 auto;
    color: ${({ theme }) => theme.colors.secondfont};
  }
  a {
    font-size: 12px;
  }
`;
function Sidemenu() {
  const fakeFeedList = useFakeFeedList();
  return (
    <Menu>
      <SidemenuContainer>
        <Profile>
          <UserIcon>
            <div></div>
          </UserIcon>
          <div>username</div>
          <ProfileButton>전환</ProfileButton>
        </Profile>
        <SideTitle>
          <div>회원님을 위한 추천</div>
          <Link to="/explore">모두 보기</Link>
        </SideTitle>
        <SideRecommend>
          {fakeFeedList.map((feedItem, key) => (
            <SidemenuItem {...feedItem} key={key} />
          ))}
        </SideRecommend>
      </SidemenuContainer>
    </Menu>
  );
}
export default Sidemenu;
