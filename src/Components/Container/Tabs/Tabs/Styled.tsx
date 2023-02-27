import styled from '@emotion/styled';
import { Tabs } from 'antd';

export interface TabsWrapperProps {
  styled?: string;
}

export const TabsWrapper = styled(Tabs)<TabsWrapperProps>`
  .ant-tabs-nav {
    margin-bottom: 10px;
  }
  ${(props) => props.styled};
`;
