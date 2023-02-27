import { Typography } from 'antd';
import type { TextProps as AntTextProps } from 'antd/lib/typography/Text';
import { Wrapper } from './Styled';

export interface TextProps extends AntTextProps {
  text: string;
  styled?: string;
}

/**
 * @name 文本展示
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param text 文本
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */
const Text: React.FC<TextProps> = (props) => {
  const { text, styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Typography.Text {...rest}>{text}</Typography.Text>
    </Wrapper>
  );
};

export default Text;
