import type { TabsProps as AntTabsProps } from 'antd';
import { TabsWrapper } from './Styled';

export interface TabsProps extends AntTabsProps {
  styled?: string;
}

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/
 */
const Tabs: React.FC<TabsProps> = (props) => {
  const { children, ...rest } = props;
  return <TabsWrapper {...rest}>{children}</TabsWrapper>;
};

export default Tabs;
