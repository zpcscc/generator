import { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { ButtonWrapper } from './Styled';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
