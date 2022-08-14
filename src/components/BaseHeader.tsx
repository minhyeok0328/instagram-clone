import useInput from '@hooks/useInput';
import styled from 'styled-components';
import TextField from '@components/TextField';
import { ReactComponent as InstagramLogo } from '@assets/images/logo.svg';

const HeaderContainer = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: : ${({ theme }) => theme.header};
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

function BaseHeader() {
  const search = useInput('');

  return (
    <HeaderContainer>
      <div>
        <InstagramLogo />
      </div>
      <div>
        <TextField {...search} placeholder="검색" search={true} />
      </div>
      <div></div>
    </HeaderContainer>
  );
}

export default BaseHeader;
