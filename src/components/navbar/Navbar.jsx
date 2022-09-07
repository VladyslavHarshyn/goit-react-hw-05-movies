import { NavbarStyle, Container } from './Navbar.styled';
import NavMenu from './navMenu/NavMenu';

const Navbar = () => {
  return (
    <NavbarStyle>
      <Container>
        <NavMenu />
      </Container>
    </NavbarStyle>
  );
};

export default Navbar;
