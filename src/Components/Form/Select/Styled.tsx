import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  .ant-select {
    width: 100%;
  }
  ${(props) => props.styled};
`;
