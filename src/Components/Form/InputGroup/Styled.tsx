import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  .ant-input:first-of-type {
    border-radius: 6px 6px 0 0;
  }
  .ant-input:last-child {
    border-radius: 0 0 6px 6px;
  }
  ${(props) => props.styled};
`;
