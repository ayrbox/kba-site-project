import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

interface ContainerWrapperProps {
  fullWidth: boolean;
  noGutter: boolean;
  width: string;
  mobileGutter: boolean;
}

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${(props: ContainerWrapperProps) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 30px;
      padding-right: 30px;
    `};
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${(props) => props.width || '1170px'};
    width: 100%;
  }
  @media (max-width: 767px) {
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 20px;
        padding-right: 20px;
      `}
  }
`;

interface ContainerProps {
  children: React.ReactElement;
  className: string;
  fullWidth: boolean;
  mobileGutter: boolean;
  width: string;
  noGutter: boolean;
  id: string;
}

const Container = ({
  children,
  className,
  fullWidth,
  mobileGutter,
  noGutter,
  width,
  id,
}: ContainerProps) => {
  const addAllClasses = ['container'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      id={id}
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      mobileGutter={mobileGutter}
      width={width}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
