import type { CollapseProps } from 'antd';
import React from 'react';
import { CollapseWrapper } from './Styled';

export interface CollapseWidgetProps extends CollapseProps {
  styled?: string;
}

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/
 */
const CollapseWidget: React.FC<CollapseWidgetProps> = (props) => {
  const { children, ...rest } = props;
  return <CollapseWrapper {...rest}>{children}</CollapseWrapper>;
};

export default CollapseWidget;
