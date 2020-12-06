import * as React from 'react';
import Container from '@components/Container';
import styled from '@emotion/styled';
import Option from '@components/Option';
import { FaCheckCircle } from 'react-icons/fa';

export const Header = styled.h1`
  font-size: 48px;
`;

export const PricingWrapper = styled.section`
  padding: 70px 0;
`;

const Pricing = () => {
  return (
    <PricingWrapper>
      <Container>
        <Header>Whats included</Header>

        <p>Everything you need to understand about your test.</p>
        <ul>
          <li>
            <FaCheckCircle /> Anytime mock test
          </li>
          <li>
            <FaCheckCircle /> Mobile app
          </li>
          <li>
            <FaCheckCircle /> Study materials
          </li>
          <li>
            <FaCheckCircle /> Result and suggestions
          </li>
        </ul>

        <Option
          title="1 month of subscription"
          description="Membership expires after 1 month"
          price={80}
        />
        <Option
          title="3 month of subscription"
          description="Membership expires after 3 months"
          price={100}
        />
        <Option
          title="6 month of subscription"
          description="Membership expires after 6 months"
          price={150}
        />

        <button>Subscribe now</button>
      </Container>
    </PricingWrapper>
  );
};

export default Pricing;
