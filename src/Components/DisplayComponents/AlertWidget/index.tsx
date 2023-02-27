import { Alert } from 'antd';
import type { AlertProps } from 'antd/lib/alert';
import { Wrapper } from './Styled';

export interface AlertWidgetProps extends AlertProps {
  styled?: string;
}

/**
 * @name 警告提示
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/alert-cn/
 */
const AlertWidget: React.FC<AlertWidgetProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Alert {...rest} />
    </Wrapper>
  );
};

export default AlertWidget;
