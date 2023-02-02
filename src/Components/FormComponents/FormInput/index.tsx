import { Input } from 'antd';
import type { InputProps } from 'antd/lib/input';
import React from 'react';
import { Wrapper } from './Styled';

export interface FormInputProps extends Omit<InputProps, 'onChange'> {
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const FormInput: React.FC<FormInputProps> = (props) => {
  const { styled, onChange, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <Input onChange={(e) => onChange?.(e?.target?.value)} {...rest} />
    </Wrapper>
  );
};

export default FormInput;
