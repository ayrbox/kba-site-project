import * as React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

export const OptionWrapper = styled.div`
  border: 4px solid #ececec;
  border-radius: 14px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  &:hover,
  &.selected {
    border-color: #b1eee9;
    background-color: #b1eee9;
  }
`;

interface OptionProps {
  id: string;
  title: string;
  description: string;
  price: number;
  selected?: boolean;
  onClick?: (id: string) => void;
}

const Option: React.FC<OptionProps> = ({
  id,
  title,
  description,
  price,
  selected = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <OptionWrapper
      className={clsx({ selected: selected })}
      onClick={handleClick}
    >
      <h3>
        {title}
        <br />
        <small>{description}</small>
      </h3>
      <h3>£{price.toFixed(2)}</h3>
    </OptionWrapper>
  );
};

export default Option;
