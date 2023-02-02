import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  .ant-input-number {
    width: 100%;
  }
  ${(props) => props.styled};
`;
