import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCamera } from '@fortawesome/free-solid-svg-icons';

const Text = styled.p`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
`;

function Home() {
  return (
    <div>
      <FontAwesomeIcon icon={faCamera} />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <Text>안녕</Text>
    </div>
  );
}
export default Home;
