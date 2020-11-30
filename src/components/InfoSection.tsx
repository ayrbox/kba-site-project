import * as React from 'react';
import styled from '@emotion/styled';
import { FaInfoCircle as IconInfo } from 'react-icons/fa';

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

const InfoSection = () => {
  return (
    <InfoWrapper>
      <Container>
        <InfoContent>
          <IconWrapper>
            <IconInfo />
          </IconWrapper>
          Name for the exam has changed from Knowledge based Assessment (KBA) to
          European Examination in General Cardiology (EEGC)
        </InfoContent>
      </Container>
    </InfoWrapper>
  );
};

export default InfoSection;
