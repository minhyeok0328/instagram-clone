import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faHouse,
  faLocationArrow,
  faBorderAll,
  faCompass,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Icon = styled.div`
  margin-left: 22px;
  height: 24px;
  width: 24px;
  > a > {
    svg {
      height: 100%;
      width: 100%;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  padding-left: 24px;
  flex: 1 0 127px;
  @media (max-width: 400px) {
    display: none;
  }
`;
function IconNav() {
  return (
    <Nav>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faLocationArrow} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faBorderAll} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faCompass} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
      </Icon>
    </Nav>
  );
}
export default IconNav;
