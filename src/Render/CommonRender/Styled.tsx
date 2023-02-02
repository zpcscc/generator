import styled from '@emotion/styled';
import { Form } from 'antd';

export interface FormItemWrapperProps {
  styled?: string;
}
export const FormItemWrapper = styled(Form.Item)<FormItemWrapperProps>`
  ${(props) => props.styled};
`;
