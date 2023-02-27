import styled from '@emotion/styled';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export interface TabPaneWrapperProps {
  styled?: string;
}

export const TabPaneWrapper = styled(TabPane)<TabPaneWrapperProps>`
  ${(props) => props.styled};
`;
