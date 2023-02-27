import type { RowProps as AntRowProps } from 'antd';
import { RowWrapper } from './Styled';

export interface RowProps extends AntRowProps {
  styled?: string;
}

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Row
 */
const Row: React.FC<RowProps> = (props) => {
  const { children, ...rest } = props;
  return <RowWrapper {...rest}>{children}</RowWrapper>;
};

export default Row;
