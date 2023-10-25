import { type FC, type ReactNode } from 'react';
import { OverflowStyledWrapper } from './Styled';

export interface OverflowWrapperProps {
  children: ReactNode;
}

const OverflowWrapper: FC<OverflowWrapperProps> = ({ children }) => {
  return <OverflowStyledWrapper>{children}</OverflowStyledWrapper>;
};

export default OverflowWrapper;
