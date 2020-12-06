import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import NavBar from '@components/Navbar';
import Layout from '@components/Layout';

import { siteTheme } from '../theme';
import BannerSection from '@components/BannerSection/BannerSection';
import InfoSection from '@components/InfoSection.tsx';
import AboutSection from '@components/AboutSection.tsx';
import ContactCTA from '@components/ContactCTA';
import AboutTeam from '@components/AboutTeam';
import Footer from '@components/Footer';
import Pricing from '@components/Pricing';

const IndexPage = () => {
  return (
    <ThemeProvider theme={siteTheme}>
      <Layout>
        <NavBar />
        <BannerSection />
        <InfoSection />
        <AboutSection />
        <ContactCTA />
        <AboutTeam />
        <Pricing />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
