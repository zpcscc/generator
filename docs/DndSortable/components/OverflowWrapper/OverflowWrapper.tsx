import { OverflowStyledWrapper } from './Styled';

export interface OverflowWrapperProps {
  children: React.ReactNode;
}

const OverflowWrapper: React.FC<OverflowWrapperProps> = ({ children }) => {
  return <OverflowStyledWrapper>{children}</OverflowStyledWrapper>;
};

export default OverflowWrapper;
