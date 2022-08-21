import styled from 'styled-components';
import MainListItem from '@components/MainPage/MainListItem';
function MainList() {
  const MainTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
  `;
  const Maincontent = styled.div`
    margin-top: ${({ theme }) => theme.space.sm};
    border: 1px solid ${({ theme }) => theme.colors.line};
    background-color: ${({ theme }) => theme.colors.white};
  `;
  return (
    <>
      <MainTitle>회원님을 위한 추천</MainTitle>
      <Maincontent>
        <section>
          <MainListItem></MainListItem>
        </section>
      </Maincontent>
    </>
  );
}

export default MainList;
