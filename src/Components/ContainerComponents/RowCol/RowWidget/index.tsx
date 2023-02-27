import type { RowProps } from 'antd';
import { RowWrapper } from './Styled';

export interface RowWidgetProps extends RowProps {
  styled?: string;
}

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Row
 */
const RowWidget: React.FC<RowWidgetProps> = (props) => {
  const { children, ...rest } = props;
  return <RowWrapper {...rest}>{children}</RowWrapper>;
};

export default RowWidget;
