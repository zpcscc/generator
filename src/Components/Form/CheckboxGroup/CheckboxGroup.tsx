import type { ListProps } from 'antd';
import { Checkbox, List } from 'antd';
import type { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox';
import type { OptionsConfigType, OptionType } from 'src/type';
import { Wrapper } from './Styled';

export interface CheckboxGroupProps extends AntCheckboxGroupProps {
  optionsConfig: OptionsConfigType<'Checkbox'>;
  listOptions?: ListProps<string>;
  styled?: string;
}

/**
 * @name 多选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param size 组件大小
 * @param optionsConfig 组件选项配置
 * @link 其他参数详见 https://ant.design/components/checkbox-cn/
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { value, optionsConfig, listOptions = { size: 'default' }, styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <Checkbox.Group value={value || optionsConfig.defaultValue} {...rest}>
        <List bordered {...listOptions}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={option.value}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </List.Item>
          ))}
        </List>
      </Checkbox.Group>
    </Wrapper>
  );
};

export default CheckboxGroup;
