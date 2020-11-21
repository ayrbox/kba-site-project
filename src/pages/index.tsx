import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import NavBar from '@components/Navbar';
import Layout from '@components/Layout';

import { siteTheme } from '../theme';

const IndexPage = () => {
  return (
    <ThemeProvider theme={siteTheme}>
      <Layout>
        <NavBar />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
