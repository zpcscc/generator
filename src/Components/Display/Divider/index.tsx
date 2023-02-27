import { Divider as AntDivider } from 'antd';
import type { DividerProps as AntDividerProps } from 'antd/lib/Divider';
import { Wrapper } from './Styled';

export interface DividerProps extends AntDividerProps {
  text: string;
  styled?: string;
}

/**
 * @name 分隔线
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param text 分割线中间文本
 * @link 其他参数详见 https://ant.design/components/divider-cn/
 */
const Divider: React.FC<DividerProps> = (props) => {
  const { text, styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <AntDivider {...rest}>{text}</AntDivider>
    </Wrapper>
  );
};

export default Divider;
