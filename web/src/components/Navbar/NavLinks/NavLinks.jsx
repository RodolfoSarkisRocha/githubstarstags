import { useLocation } from 'react-router-dom';
import { StyledLink } from './styles';

const NavLinks = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;
  return <StyledLink to="/">home</StyledLink>;
};

export default NavLinks;
