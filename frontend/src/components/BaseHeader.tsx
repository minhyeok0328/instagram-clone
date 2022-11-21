import useInput from '@hooks/useInput';
import styled from 'styled-components';
import TextField from '@components/TextField';
import { ReactComponent as InstagramLogo } from '@assets/images/logo.svg';
import IconNav from './IconNav';
import { Link } from 'react-router-dom';

const HeaderContent = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  align-items: center;
  max-width: calc(935px + 40px);
  padding: 0 20px;
  margin: 0 auto;
  z-index: 1;
  > div {
    flex: 1 0 127px;
    :nth-child(1) {
      img {
        width: 103px;
        height: 29px;
      }
    }
  }
`;
const HeaderContainer = styled.div`
  position: sticky;
  left: 0;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.white};
`;
function BaseHeader() {
  const search = useInput('');

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <Link to="/">
            <InstagramLogo />
          </Link>
        </div>
        <TextField {...search} placeholder="검색" search={true} />
        <IconNav />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default BaseHeader;
