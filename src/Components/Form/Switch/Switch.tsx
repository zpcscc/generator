import { Switch as AntSwitch } from 'antd';
import type { SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import { Wrapper } from './Styled';

export interface SwitchProps extends AntSwitchProps {
  value?: boolean;
  styled?: string;
}

/**
 * @name 开关
 * @param value 组件的值
 * @param checked 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/switch-cn/
 */
const Switch: React.FC<SwitchProps> = (props) => {
  const { value, checked, styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <AntSwitch checked={value || checked} {...rest} />
    </Wrapper>
  );
};

export default Switch;
