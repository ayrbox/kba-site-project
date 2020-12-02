import * as React from 'react';

import styled from '@emotion/styled';
import Container from '@components/Container';

export const AboutWrapper = styled.section`
  background: red;
  padding-bottom: 70px;
  color: #000;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

const AboutSection = () => {
  return (
    <AboutWrapper>
      <Container>
        <ContentWrapper>
          <h1>About</h1>
          <h1>Image here</h1>
        </ContentWrapper>
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
