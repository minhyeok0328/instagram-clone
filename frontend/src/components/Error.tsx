import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Errorcontent = styled.div`
  text-align: center;
  padding-top: 40px;
  > h2 {
    font-size: 22px;
    font-weight: bold;
  }
  > p {
    margin-top: 40px;
    font-size: 16px;
    > a {
      color: ${({ theme }) => theme.colors.link};
    }
  }
`;
function Error() {
  return (
    <div>
      <Errorcontent>
        <h2>죄송합니다. 페이지를 사용할 수 없습니다.</h2>
        <p>
          클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다.
          <Link to="/"> Instagram으로 돌아가기.</Link>
        </p>
      </Errorcontent>
    </div>
  );
}
export default Error;
