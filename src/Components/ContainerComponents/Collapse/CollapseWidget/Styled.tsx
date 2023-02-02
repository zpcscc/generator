import styled from '@emotion/styled';
import { Collapse } from 'antd';

export interface CollapseWrapperProps {
  styled?: string;
}

export const CollapseWrapper = styled(Collapse)<CollapseWrapperProps>`
  ${(props) => props.styled};
`;
