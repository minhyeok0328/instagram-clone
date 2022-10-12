import Login from '@components/Login';
import styled from 'styled-components';

const Logincontent = styled.div`
  width: 350px;
  background-color: ${({ theme }) => theme.colors.white};
`;
function Member() {
  return (
    <>
      <Logincontent>
        <Login />
      </Logincontent>
    </>
  );
}

export default Member;
