import type { OptionsConfigType, OptionType } from '@dxsixpc/generator';
import { List, Radio } from 'antd';
import type { RadioProps as AntRadioProps } from 'antd/lib/radio';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';

export interface RadioGroupProps extends Omit<AntRadioProps, 'onChange'> {
  optionsConfig: OptionsConfigType<'Radio'>;
  size?: 'large' | 'middle' | 'small';
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 单选
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param size 组件大小
 * @param optionsConfig 选项配置
 * @link 其他参数详见 https://ant.design/components/radio-cn/
 */
const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { optionsConfig, size, styled, onChange, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;

  return (
    <Wrapper styled={styled}>
      <List bordered itemLayout='vertical' size={listSize}>
        <Radio.Group onChange={(e) => onChange?.(e?.target?.value)} {...rest}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={uniqueId()}>
              <Radio value={option.value}>{option.label}</Radio>
            </List.Item>
          ))}
        </Radio.Group>
      </List>
    </Wrapper>
  );
};

export default RadioGroup;
