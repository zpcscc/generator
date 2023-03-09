import { type SpaceProps as AntSpaceProps } from 'antd';
import { SpaceWrapper } from './Styled';

export interface SpaceProps extends AntSpaceProps {
  styled?: string;
}

/**
 * @name Space 间距
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */
const Space: React.FC<SpaceProps> = (props) => {
  const { children, ...rest } = props;
  return <SpaceWrapper {...rest}>{children}</SpaceWrapper>;
};

export default Space;
