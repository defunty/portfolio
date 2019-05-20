import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return(
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
}

const Nav = () => {
  return(
    <StyledNav>
      <ul>
        <li></li>

      </ul>
    </StyledNav>
  );
}

// style
const StyledHeader = styled.header`
  
`;

const StyledNav = styled.nav`
`;


export default Header;