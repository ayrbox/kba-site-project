import * as React from 'react';
import { FC, ReactElement } from 'react';

interface BoxProps {
  children: ReactElement | ReactElement[];
}

const Box: FC<BoxProps> = ({ children }) => <div>{children}</div>;

export default Box;
