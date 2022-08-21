import styled from 'styled-components';
import MainList from '@components/MainPage/MainList';
const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: stretch;
  margin: 0;
  padding: 0;
`;
const MaincContainer = styled.section`
  max-width: 470px;
  width: 100%;
  margin: auto;
  margin-top: ${({ theme }) => theme.space.md};
`;
function BaseMain() {
  return (
    <Main>
      <div>
        <MaincContainer>
          <MainList></MainList>
        </MaincContainer>
      </div>
    </Main>
  );
}

export default BaseMain;
