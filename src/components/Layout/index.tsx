import * as React from 'react';
import '../../css/resetCSS';
import '../../css/siteCSS';

import { LayoutWrapper } from './layout.styles';

const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
