import styled from '@emotion/styled';
import * as React from 'react';
import { FC } from 'react';

const ShapeWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
  & ~ div {
    z-index: 1;
    position: relative;
  }
`;

interface TiltBottomProps {
  className?: string;
  color?: string;
}

const TiltBottom: FC<TiltBottomProps> = ({ className, color }) => {
  return (
    <ShapeWrapper className={className}>
      <svg data-name="Layer 1" viewBox="0 0 1920 233" fill={color || '#fff'}>
        <path fillRule="evenodd" d="M1920 233V0L0 233h1920z" />
      </svg>
    </ShapeWrapper>
  );
};

export default TiltBottom;
