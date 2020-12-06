import * as React from 'react';
import styled from '@emotion/styled';

export const OptionWrapper = styled.div`
  border: 4px solid #ececec;
  border-radius: 14px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

interface OptionProps {
  title: string;
  description: string;
  price: number;
}

const Option: React.FC<OptionProps> = ({ title, description, price }) => {
  return (
    <OptionWrapper>
      <div>
        <strong>{title}</strong>
        <br />
        <small>{description}</small>
      </div>
      <h3>£{price.toFixed(2)}</h3>
    </OptionWrapper>
  );
};

export default Option;
