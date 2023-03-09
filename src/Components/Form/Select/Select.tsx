import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd/lib/select';
import { Wrapper } from './Styled';

export interface SelectProps extends AntSelectProps<string> {
  styled?: string;
}

/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const Select: React.FC<SelectProps> = (props) => {
  const { value, styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <AntSelect value={value} {...rest} />
    </Wrapper>
  );
};

export default Select;
