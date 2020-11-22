import * as React from 'react';
import { FC, ReactElement } from 'react';

interface NavbarWrapperProps {
  children: ReactElement | ReactElement[];
}

const NavbarWrapper: FC<NavbarWrapperProps> = ({ children }) => {
  return <nav className="nav-wrapper">{children}</nav>;
};

export default NavbarWrapper;
