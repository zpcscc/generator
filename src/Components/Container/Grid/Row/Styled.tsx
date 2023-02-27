import styled from '@emotion/styled';
import { Row } from 'antd';

export interface RowWrapperProps {
  styled?: string;
}

export const RowWrapper = styled(Row)<RowWrapperProps>`
  ${(props) => props.styled};
`;
