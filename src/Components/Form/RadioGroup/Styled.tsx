import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  .ant-list {
    width: 100%;
    .ant-radio-group {
      width: 100%;
      .ant-list-item {
        display: flex;
        & > label {
          width: 100%;
          span {
            white-space: pre-line;
          }
        }
      }
    }
  }
  ${(props) => props.styled};
`;
