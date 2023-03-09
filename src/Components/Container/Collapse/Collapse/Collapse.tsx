import type { CollapseProps as AntCollapseProps } from 'antd';
import { CollapseWrapper } from './Styled';

export interface CollapseProps extends AntCollapseProps {
  styled?: string;
}

/**
 * @name 布局组件-折叠面板（子组件只能为“布局面板”）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/
 */
const Collapse: React.FC<CollapseProps> = (props) => {
  const { children, ...rest } = props;
  return <CollapseWrapper {...rest}>{children}</CollapseWrapper>;
};

export default Collapse;
