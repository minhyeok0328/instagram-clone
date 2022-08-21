import styled from 'styled-components';
const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: stretch;
  margin: 0;
  padding: 0;
`;
const MainTitle = styled.h4`
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  display: block;
`;
const MaincContainer = styled.section`
  max-width: 470px;
  width: 100%;
  margin: auto;
  margin-top: 16px;
`;
const Maincontent = styled.div`
  margin-top: 16px;
  border: 1px solid rgb(219, 219, 219);
  flex-direction: column;
`;
const MainList = styled.section`
  display: flex;
  flex-direction: column;
`;
const MainListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  > div {
    flex: 0 0 auto;
    :nth-child(2) {
      flex: 1 1 auto;
    }
    :nth-child(3) {
      margin-left: 8px;
      button {
        background-color: ${({ theme }) => theme.colors.button};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid transparent;
        padding: 5px 23px;
        border-radius: 4px;
        cursor: pointer;
        > div {
          font-size: 14px;
          font-weight: 700;
          > div {
          }
        }
      }
    }
  }
`;
const UserIcon = styled.div`
  margin-right: 12px;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  > div {
    width: 44px;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    margin: auto;
  }
`;
function BaseMain() {
  return (
    <Main>
      <div>
        <MaincContainer>
          <MainTitle>회원님을 위한 추천</MainTitle>
          <Maincontent>
            <MainList>
              <MainListItem>
                <UserIcon>
                  <div></div>
                </UserIcon>
                <div>
                  <div>usernickname</div>
                  <div>username</div>
                </div>
                <div>
                  <button>
                    <div>팔로우</div>
                  </button>
                </div>
              </MainListItem>
              <MainListItem>
                <UserIcon>
                  <div></div>
                </UserIcon>
                <div>
                  <div>usernickname</div>
                  <div>username</div>
                </div>
                <div>
                  <button>
                    <div>팔로우</div>
                  </button>
                </div>
              </MainListItem>
              <MainListItem>
                <UserIcon>
                  <div></div>
                </UserIcon>
                <div>
                  <div>usernickname</div>
                  <div>username</div>
                </div>
                <div>
                  <button>
                    <div>팔로우</div>
                  </button>
                </div>
              </MainListItem>
              <MainListItem>
                <UserIcon>
                  <div></div>
                </UserIcon>
                <div>
                  <div>usernickname</div>
                  <div>username</div>
                </div>
                <div>
                  <button>
                    <div>팔로우</div>
                  </button>
                </div>
              </MainListItem>
              <MainListItem>
                <UserIcon>
                  <div></div>
                </UserIcon>
                <div>
                  <div>usernickname</div>
                  <div>username</div>
                </div>
                <div>
                  <button>
                    <div>팔로우</div>
                  </button>
                </div>
              </MainListItem>
            </MainList>
          </Maincontent>
        </MaincContainer>
      </div>
    </Main>
  );
}

export default BaseMain;
