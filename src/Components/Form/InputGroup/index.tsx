import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps } from 'antd/lib/input';
import { useState } from 'react';
import { Wrapper } from './Styled';

export interface InputGroupProps extends Omit<AntInputProps, 'onChange' | 'placeholder'> {
  value: string[];
  placeholder?: string[];
  level?: number;
  styled?: string;
  onChange?: (value: string[]) => void;
  Ï;
}

/**
 * @name 输入框组，用于输入多条数据，组成数组
 * @param value 组件的值
 * @param placeholder 组件的占位符
 * @param level 组件的层级数量，默认为2
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const InputGroup: React.FC<InputGroupProps> = (props) => {
  const { value = [], placeholder = [], level = 2, styled, onChange, ...rest } = props;

  const [valueArr, setValueArr] = useState<string[]>(Array.isArray(value) ? value : []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValueArr = [...valueArr];
    newValueArr[index] = e?.target?.value;
    setValueArr(newValueArr);
    onChange?.(newValueArr);
  };

  return (
    <Wrapper styled={styled}>
      <AntInput.Group>
        {Array(level)
          .fill('')
          .map((_item, index) => (
            <AntInput
              key={index}
              defaultValue={valueArr[index] || ''}
              placeholder={placeholder[index] || '请输入。。。'}
              onChange={(value) => onInputChange(value, index)}
              {...rest}
            />
          ))}
      </AntInput.Group>
    </Wrapper>
  );
};

export default InputGroup;
