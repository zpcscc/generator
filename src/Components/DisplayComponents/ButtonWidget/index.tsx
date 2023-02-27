import { Button } from 'antd';
import type { ButtonProps } from 'antd/lib/button';
import { Wrapper } from './Styled';

export interface ButtonWidgetProps extends ButtonProps {
  buttonText?: string;
  styled?: string;
}

/**
 * @name 按钮
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param buttonText 按钮文本
 * @link 其他参数详见 https://ant.design/components/button-cn/
 */
const ButtonWidget: React.FC<ButtonWidgetProps> = (props) => {
  const { buttonText = '按钮', styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <Button {...rest}>{buttonText}</Button>
    </Wrapper>
  );
};

export default ButtonWidget;
