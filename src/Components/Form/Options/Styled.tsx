import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  input {
    max-width: 100% !important;
  }
  ${(props) => props.styled};
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
