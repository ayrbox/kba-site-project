import Container from '@components/Container';
import * as React from 'react';
import Navbar from './NavBar';
import NavbarWrapper from './NavbarWrapper';
import styled from '@emotion/styled';
import { FC } from 'react';
import logo from '@images/logo.jpg';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoImage = styled.img`
  height: 100px;
  margin: 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterButton = styled.button`
  color: #fff;
  padding: 16px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 12px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #486295;
  }
`;

const NavbarIndex: FC = () => (
  <NavbarWrapper>
    <Container>
      <NavContainer>
        <a href="#">
          <LogoImage src={logo} />
        </a>
        <MenuContainer>
          <Navbar />
          <RegisterButton>Register</RegisterButton>
        </MenuContainer>
      </NavContainer>
    </Container>
  </NavbarWrapper>
);

export default NavbarIndex;
