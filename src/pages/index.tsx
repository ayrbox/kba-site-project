import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import NavBar from '@components/Navbar';
import Layout from '@components/Layout';

import { siteTheme } from '../theme';
import BannerSection from '@components/BannerSection/BannerSection';
import InfoSection from '@components/InfoSection.tsx';

const IndexPage = () => {
  return (
    <ThemeProvider theme={siteTheme}>
      <Layout>
        <NavBar />
        <BannerSection />
        <InfoSection />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
