import * as React from 'react';

import styled from '@emotion/styled';
import Container from '@components/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export const AboutWrapper = styled.section`
  background: #eaeaea;
  padding: 70px 0;
  color: #000;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  align-items: center;
  padding: 70px 0;
`;

export const Content = styled.div`
  display: block;
  padding: 60px;
  width: 50%;
  line-height: 1.5;
`;

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "book-heart.jpg" }) {
        childImageSharp {
          id
          fixed(height: 500, width: 500, fit: COVER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { img } = data;

  return (
    <AboutWrapper>
      <Container>
        <ContentWrapper>
          <Img
            fixed={img.childImageSharp.fixed}
            alt="About Image"
            style={{ borderRadius: '20px' }}
          />
          <Content>
            <p>
              European Examination in General Cardiology (EEGC) Examination is
              an integral part of the Cardiology Training and one of the
              requirements for Certificate of Completion of Training (CCT). This
              examination in intended for ST5 Trainees to assess Core Cardiology
              knowledge set out in the curriculum.
            </p>
            <p>
              EEGC Examination contains 120 multiple-choice questions (MCQs) to
              be answered in 3 hours. The MCQs will consist of a clinical stem,
              possibly including reference to an image or video loop, followed
              by a single question and then a best of five choices. Question
              distribution includes 20% General Cardiology, 20% Ischemic heart
              disease, 20% Valvular and Myocardial disease, 20% rhythm
              disorders, 14% Non-invasive Investigations and 6% Adult Congenital
              Heart Disease. The pass mark is criterion referenced and usually
              around 60% correct anwers. The pass rate is usually 85-95%.
            </p>
            <p>
              Main source for preparation is ESC textbook of Cardiovascular
              Medicine.
            </p>
            <p>
              This website provides comprehensive source of knowledge and
              practice for candidates to prepare for EEGC Exam.
            </p>
          </Content>
        </ContentWrapper>
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
