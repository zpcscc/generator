import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd/lib/input-number';
import React from 'react';
import { Wrapper } from './Styled';

export interface FormInputNumberProps extends InputNumberProps {
  styled?: string;
}

/**
 * @name 数字输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-number-cn/
 */
const FormInputNumber: React.FC<FormInputNumberProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <InputNumber {...rest} />
    </Wrapper>
  );
};

export default FormInputNumber;
