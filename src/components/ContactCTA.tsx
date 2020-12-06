import * as React from 'react';
import styled from '@emotion/styled';
import { FaEnvelope as EnvelopeIcon } from 'react-icons/fa';

import Container from '@components/Container';

export const InfoWrapper = styled.section`
  padding: 70px 0;
  color: #535353;
`;

export const IconWrapper = styled.div`
  padding-right: 16px;
  font-size: 30px;
  display: inline-block;
`;
export const InfoContent = styled.span`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactCTA = () => {
  return (
    <InfoWrapper>
      <Container>
        <InfoContent>
          <IconWrapper>
            <EnvelopeIcon />
          </IconWrapper>
          Have you got a message or do you want to share and discuss an image
          with us? If yes, <a href="#"> please click here </a> to let us know.
        </InfoContent>
      </Container>
    </InfoWrapper>
  );
};

export default ContactCTA;
