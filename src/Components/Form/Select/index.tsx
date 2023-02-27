import type { OptionsConfigType, OptionType } from '@dxsixpc/generator';
import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd/lib/select';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';

export interface SelectProps extends AntSelectProps<string> {
  optionsConfig: OptionsConfigType<'Radio'>;
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param optionsConfig 选项配置
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const Select: React.FC<SelectProps> = (props) => {
  const { value, optionsConfig, styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <AntSelect value={value || undefined} {...rest}>
        {optionsConfig?.options?.map((option: OptionType) => (
          <AntSelect.Option key={uniqueId()} value={option.value as string}>
            {option.label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </Wrapper>
  );
};

export default Select;
