import * as React from 'react';
import styled from '@emotion/styled';
import { ReactElement, FC } from 'react';

import '@styles/ResetCss';
import '@styles/GlobalCss';

const LayoutWrapper = styled.div`
  overflow: hidden;
  .nav-wrapper {
    background: #486295;
    color: #fff;

    .main-menu {
      margin-right: 40px;
      padding: 0;

      li {
        display: inline-block;
        padding-left: 16px;
        padding-right: 16px;
        &:first-of-type {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: green;
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #edca37;
          }
        }
        @media (max-width: 990px) {
          display: none;
        }
      }
    }
  }
`;

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps): ReactElement => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Layout;
