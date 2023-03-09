import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface InputProps extends Omit<AntInputProps, 'onChange'> {
  styled?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const Input: React.FC<InputProps> = (props) => {
  const { styled, onChange, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <AntInput onChange={(e) => onChange?.(e?.target?.value, e)} {...rest} />
    </Wrapper>
  );
};

export default Input;
