import { Input } from 'antd';
import type { TextAreaProps as AntTextAreaProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface TextAreaProps extends Omit<AntTextAreaProps, 'onChange'> {
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */
const TextArea: React.FC<TextAreaProps> = (props) => {
  const { styled, onChange, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <Input.TextArea onChange={(e) => onChange?.(e?.target?.value)} {...rest} />
    </Wrapper>
  );
};

export default TextArea;
