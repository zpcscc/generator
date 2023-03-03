import styled from '@emotion/styled';
import { Form } from 'antd';

export interface FormItemWrapperProps {
  styled?: string;
}

// 表单子项
export const FormItemWrapper = styled(Form.Item)<FormItemWrapperProps>`
  ${(props) => props.styled};
`;

// 表单
export const FormWrapper = styled(Form)``;
