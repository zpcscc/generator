import type { ColProps as AntColProps } from 'antd';
import { ColWrapper } from './Styled';

export interface ColProps extends AntColProps {
  styled?: string;
}

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Col
 */
const Col: React.FC<ColProps> = (props) => {
  const { children, ...rest } = props;
  return <ColWrapper {...rest}>{children}</ColWrapper>;
};

export default Col;
