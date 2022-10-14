import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signupcontent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  display: flex;
  margin: 0 0 10px;
  flex-direction: column;
`;
const Signuptext = styled.div`
  text-align: center;
  > p {
    margin: 15px;
    font-size: 14px;
    > a {
      color: ${({ theme }) => theme.colors.button};
      font-weight: bold;
    }
  }
`;

function signupbutton() {
  return (
    <Signupcontent>
      <Signuptext>
        <p>
          계정이 없으신가요?
          <Link to="/">가입하기</Link>
        </p>
      </Signuptext>
    </Signupcontent>
  );
}
export default signupbutton;
