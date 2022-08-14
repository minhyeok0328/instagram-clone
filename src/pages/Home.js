import styled from 'styled-components';

const Text = styled.p`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
`;

function Home() {
  return <Text>안녕</Text>;
}
export default Home;
