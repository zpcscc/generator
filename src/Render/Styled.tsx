import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Form } from 'antd';

export const editorStyled = css`
  pointer-events: none;
  border: 1px dashed rgb(187, 187, 187);
`;

export interface FormItemWrapperProps {
  styled?: string;
}

// 表单子项
export const FormItemWrapper = styled(Form.Item)<FormItemWrapperProps>`
  ${(props) => props.styled};
`;

// 表单
export const FormWrapper = styled(Form)`
  overflow: hidden;
`;
