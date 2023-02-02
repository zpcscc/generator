import { Switch } from 'antd';
import type { SwitchProps } from 'antd/lib/switch';
import React from 'react';
import { Wrapper } from './Styled';

export interface FormSwitchProps extends SwitchProps {
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
const FormSwitch: React.FC<FormSwitchProps> = (props) => {
  const { value, checked, styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Switch checked={value || checked} {...rest} />
    </Wrapper>
  );
};

export default FormSwitch;
