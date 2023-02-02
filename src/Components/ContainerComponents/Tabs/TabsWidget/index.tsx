import type { TabsProps } from 'antd';
import React from 'react';
import { TabsWrapper } from './Styled';

export interface TabsWidgetProps extends TabsProps {
  styled?: string;
}

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/
 */
const TabsWidget: React.FC<TabsWidgetProps> = (props) => {
  const { children, ...rest } = props;
  return <TabsWrapper {...rest}>{children}</TabsWrapper>;
};

export default TabsWidget;
