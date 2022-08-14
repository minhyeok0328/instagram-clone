import useInput from '../hooks/useInput';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import TextField from './TextField';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  > div {
    :nth-child(1) {
      img {
        width: 103px;
        height: 29px;
      }
    }
  }
`;

function Header() {
  const search = useInput('');

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <TextField {...search} placeholder='검색' search={true} />
      </div>
      <div></div>
    </HeaderContainer>
  );
}

export default Header;
