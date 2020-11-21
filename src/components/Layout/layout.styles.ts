import styled from '@emotion/styled';

// TODO: reset css
export const LayoutWrapper = styled.div`
  overflow: hidden;
  .nav-wrapper {
    border: 2px solid red;
    background: navy;
    color: yellow;

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
