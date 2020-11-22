import Box from '@components/Box';
import Container from '@components/Container';
import * as React from 'react';
import Navbar from './NavBar';
import NavbarWrapper from './NavbarWrapper';
import styled from '@emotion/styled';
import { FC } from 'react';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarIndex: FC = () => (
  <NavbarWrapper>
    <Container>
      <NavContainer>
        <a href="#">
          <h1>KBA Cardiolog</h1>
        </a>
        <MenuContainer>
          <Navbar />
          <button>Register</button>
        </MenuContainer>
      </NavContainer>
    </Container>
  </NavbarWrapper>
);

export default NavbarIndex;
