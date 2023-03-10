import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Form } from 'antd';

export const editorStyled = css`
  pointer-events: none;
`;

export interface FormItemWrapperProps {
  styled?: string;
}

// 表单子项
export const FormItemWrapper = styled(Form.Item)<FormItemWrapperProps>`
  .ant-form-item-label > label::after {
    display: inline-block;
  }
`;

// 表单
export const FormWrapper = styled(Form)`
  overflow: hidden;
  padding: 2px;
`;
