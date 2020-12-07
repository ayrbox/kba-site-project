import * as React from 'react';
import styled from '@emotion/styled';

import Container from '@components/Container';

export const FooterWrapper = styled.footer`
  background-color: #1c3055;
  padding: 2em;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ul > li {
    display: inline-block;
    padding-right: 20px;

    & > a {
      color: #fff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <p>&copy; Cardiology</p>
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
