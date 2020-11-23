import NavLinks from './NavLinks/NavLinks';
import { StyledMenu } from './styles';

const Navbar = () => {
  return (
    <StyledMenu>
      <h3>GitHubStars</h3>
      <NavLinks />
    </StyledMenu>
  );
};

export default Navbar;
