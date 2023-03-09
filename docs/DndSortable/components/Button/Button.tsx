import type { HTMLAttributes } from 'react';
import { ButtonWrapper } from './Styled';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
