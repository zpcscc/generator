import { type FC, type ReactNode } from 'react';
import { FloatWrapper } from './Styled';

export interface FloatingControlsProps {
  children: ReactNode;
}

const FloatingControls: FC<FloatingControlsProps> = ({ children }) => {
  return <FloatWrapper>{children}</FloatWrapper>;
};
export default FloatingControls;
