import styled from '@emotion/styled';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export interface CollapsePanelWrapperProps {
  styled?: string;
}

export const CollapsePanelWrapper = styled(Panel)<CollapsePanelWrapperProps>`
  ${(props) => props.styled};
`;
