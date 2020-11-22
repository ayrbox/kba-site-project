import styled from '@emotion/styled';
import * as React from 'react';
import Container from '@components/Container';

import TiltBottom from './TiltBottom';

export const BannerWrapper = styled.section`
  padding: 150px 0 0 0;
  color: #fff;
  background-image: linear-gradient(rgb(72, 98, 149) 0%, rgb(41, 73, 136) 100%);
  background-size: cover;
  background-position: top center;
  overflow: hidden;
  position: relative;
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .banner-shape {
    z-index: 2;
  }
`;

const BannerContent = styled.div`
  min-height: 40vh;
  display: flex;
  align-items: center;
  padding-bottom: 200px;
  color: #fff;
  text-align: center;
  position: relative;

  & > div {
    width: 100%;
  }

  & h1 {
    font-size: 51px;
  }

  & .call-to-action {
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    background-color: #b1eee9;
    margin-top: 20px;
  }
`;

const BannerSection: React.FC = () => {
  return (
    <BannerWrapper>
      <TiltBottom />
      <Container>
        <BannerContent>
          <div>
            <h1>We help you prepare</h1>
            <p>
              Comprehenshive source of knowledge and practice for candidates to
              prepare for EEGC Exam.
            </p>

            <button className="call-to-action">Learn More</button>
          </div>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default BannerSection;
