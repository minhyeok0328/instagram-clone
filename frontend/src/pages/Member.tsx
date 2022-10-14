import Signup from '@components/Signup';
import styled from 'styled-components';
const Logincontent = styled.div`
  width: 350px;
  background-color: ${({ theme }) => theme.colors.white};
`;
function Member() {
  return (
    <>
      <Logincontent>
        <Signup />
      </Logincontent>
    </>
  );
}

export default Member;
