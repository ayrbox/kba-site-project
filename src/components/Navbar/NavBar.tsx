import * as React from 'react';
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';

export type MenuItem = {
  slug: string;
  label: string;
  path: string;
  offset: number;
};

const items: MenuItem[] = [
  {
    slug: 'study-materials',
    label: 'Study Materials',
    path: '#',
    offset: 0,
  },
  {
    slug: 'mock-test',
    label: 'Mock Test',
    path: '#',
    offset: 0,
  },
  {
    slug: 'login',
    label: 'Login',
    path: '#',
    offset: 0,
  },
  { slug: 'register', label: 'Register', path: '#', offset: 0 },
];

const NavBar = () => (
  <ul className="main-menu">
    {items.map(({ slug, label, path, offset }) => (
      <li key={`menu-item-${slug}`}>
        <AnchorLink href={path} offset={offset}>
          {label}
        </AnchorLink>
      </li>
    ))}
  </ul>
);

export default NavBar;
