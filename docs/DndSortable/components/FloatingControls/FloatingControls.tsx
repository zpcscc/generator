import { FloatWrapper } from './Styled';

export interface FloatingControlsProps {
  children: React.ReactNode;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ children }) => {
  return <FloatWrapper>{children}</FloatWrapper>;
};
export default FloatingControls;
