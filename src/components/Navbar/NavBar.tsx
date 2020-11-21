import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const items = [
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

const NavBar = () => {
  return (
    <div>
      <ul className="main-menu">
        {items.map(({ slug, label, path, offset }, idx) => (
          <li key={`menu-item-${slug}`}>
            <AnchorLink href={path} offset={offset}>
              {label}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
