import { InputNumber as AntInputNumber } from 'antd';
import type { InputNumberProps as AntInputNumberProps } from 'antd/lib/input-number';
import { Wrapper } from './Styled';

export interface InputNumberProps extends AntInputNumberProps {
  styled?: string;
}

/**
 * @name 数字输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-number-cn/
 */
const InputNumber: React.FC<InputNumberProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <AntInputNumber {...rest} />
    </Wrapper>
  );
};

export default InputNumber;
