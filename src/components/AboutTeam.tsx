import * as React from 'react';

import styled from '@emotion/styled';
import Container from '@components/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export const AboutWrapper = styled.section`
  background: #486295;
  padding: 70px 0;
  color: #000;
`;

export const ContentWrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  padding: 70px 0;
`;

export const Content = styled.div`
  display: block;
  line-height: 1.5;
  color: #fff;
  & p {
    color: #fff;
  }
`;

export const Header = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 48px;
  padding-bottom: 20px;
  position: relative;
`;

export const Divider = styled.hr`
  border-bottom: 4px solid #fff;
  width: 200px;
  display: block;
  line-height: 1.6em;
`;

export const TeamMember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const TeamDescription = styled.div`
  padding-left: 20px;
`;

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "doctor-picture.jpg" }) {
        childImageSharp {
          id
          fixed(height: 200, width: 200, fit: COVER) {
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
          <Header>
            About
            <Divider />
          </Header>
          <Content>
            <p>
              The existing resources for the KBA (knowledge base assessment)
              examination preparation are very limited. This is a course that is
              of use not only to the cardiology trainees but also newly
              appointed consultants who wish to refresh their basic knowledge.
            </p>
            <p>
              The main focus of this course is the KBA examination but we hope
              to extend to other relevant examinations in cardiology such as BSE
              for TTE/TOE, HRUK exam etc.
            </p>

            <TeamMember>
              <Img
                fixed={img.childImageSharp.fixed}
                alt="About Image"
                style={{ borderRadius: '20px' }}
              />
              <TeamDescription>
                <strong>Doctor Name</strong>
                <br />
                Consultant, Cardiologist
                <br />
                Royal London Hostpital
                <br />
                London
                <br />
                UK
              </TeamDescription>
            </TeamMember>
          </Content>
        </ContentWrapper>
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
