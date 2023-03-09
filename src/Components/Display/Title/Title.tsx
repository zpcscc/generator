import { Typography } from 'antd';
import type { TitleProps as AntTitleProps } from 'antd/lib/typography/Title';
import { Wrapper } from './Styled';

export interface TitleProps extends AntTitleProps {
  styled?: string;
}

/**
 * @name 标题展示
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param title 标题
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Title
 */
const Title: React.FC<TitleProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Typography.Title {...rest}>{children}</Typography.Title>
    </Wrapper>
  );
};

export default Title;
