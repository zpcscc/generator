import { Alert as AntAlert } from 'antd';
import type { AlertProps as AntAlertProps } from 'antd/lib/alert';
import { Wrapper } from './Styled';

export interface AlertProps extends AntAlertProps {
  styled?: string;
}

/**
 * @name 警告提示
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/alert-cn/
 */
const Alert: React.FC<AlertProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <AntAlert {...rest} />
    </Wrapper>
  );
};

export default Alert;
