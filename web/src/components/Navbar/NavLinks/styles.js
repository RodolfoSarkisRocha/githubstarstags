import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 0 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  &:visited {
    color: #000;
  }
  &:hover {
    color: #95bcf2;
  }
`;

export { StyledLink };
