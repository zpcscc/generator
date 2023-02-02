import styled from '@emotion/styled';
import { Form } from 'antd';

export const FormWrapper = styled(Form)`
  .ant-select,
  input,
  .ant-input-number {
    max-width: 300px;
  }
`;

export interface FormItemWrapperProps {
  styled?: string;
}

export const FormItemWrapper = styled(Form.Item)<FormItemWrapperProps>`
  ${(props) => props.styled};
`;
