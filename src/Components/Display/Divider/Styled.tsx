import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  ${(props) => props.styled};
`;
