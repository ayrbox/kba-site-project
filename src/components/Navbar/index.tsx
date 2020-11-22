import Container from '@components/Container';
import * as React from 'react';
import Navbar from './NavBar';
import NavbarWrapper from './NavbarWrapper';

const NavbarIndex = () => (
  <NavbarWrapper>
    <Container>
      <h1>KBA Cardiology</h1>
      <Navbar />
    </Container>
  </NavbarWrapper>
);

export default NavbarIndex;
