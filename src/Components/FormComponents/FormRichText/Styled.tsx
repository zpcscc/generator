import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  ${(props) => props.styled};
`;
