import type { TabPaneProps as AntTabPaneProps } from 'antd';
import { TabPaneWrapper } from './Styled';

export interface TabPaneProps extends AntTabPaneProps {
  styled?: string;
}

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/#Tab.Panel
 */
const TabPane: React.FC<TabPaneProps> = (props) => {
  const { children, ...rest } = props;
  return <TabPaneWrapper {...rest}>{children}</TabPaneWrapper>;
};

export default TabPane;
