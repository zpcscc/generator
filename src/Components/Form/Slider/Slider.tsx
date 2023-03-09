import { InputNumber, Slider as AntSlider } from 'antd';
import type { InputNumberProps } from 'antd/lib/input-number';
import type { SliderBaseProps } from 'antd/lib/slider';
import { useEffect, useState } from 'react';
import { Wrapper } from './Styled';

export interface SliderProps extends Omit<SliderBaseProps, 'onChange'> {
  value: number;
  onChange?: (value: number) => void;
  showInputNumber?: boolean;
  inputNumberOptions?: InputNumberProps;
  styled?: string;
  layout?: 'horizontal' | 'vertical';
}

/**
 * @name 滑动输入条
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param showInputNumber 显示数字输入框
 * @param inputNumberOptions 数字显示框的参数
 * @param styled 自定义样式 示例：styled：`width:'100%'`
 * @link 其他参数详见 https://ant.design/components/slider-cn/
 */
const Slider: React.FC<SliderProps> = (props) => {
  const {
    styled,
    value,
    onChange,
    showInputNumber = false,
    inputNumberOptions,
    layout = 'horizontal',
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<number>(value || 0);

  const onSliderChange = (newValue: number) => {
    if (typeof newValue === 'number') setInputValue(newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    // 传入的value变化时，也要及时更新inputValue
    setInputValue(value);
  }, [value]);

  return (
    <Wrapper styled={styled} showInputNumber={showInputNumber} layout={layout}>
      <AntSlider value={inputValue} onChange={onSliderChange} {...rest} />
      {showInputNumber && (
        <InputNumber
          value={inputValue}
          onChange={(value) => {
            if (value !== null) onSliderChange(Number(value));
          }}
          {...inputNumberOptions}
        />
      )}
    </Wrapper>
  );
};

export default Slider;
