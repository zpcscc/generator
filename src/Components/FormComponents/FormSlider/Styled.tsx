import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
  showInputNumber?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.showInputNumber && props.layout === 'vertical' ? 'column' : 'row'};
  .ant-slider {
    width: 98%;
    margin: 10px 1%;
    margin-right: ${(props) =>
      props.showInputNumber && props.layout === 'vertical' ? '0px' : '16px'};
  }
  .ant-input-number-group-wrapper {
    min-width: 110px;
  }
  ${(props) => props.styled};
`;
