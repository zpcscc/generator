import type { ColorPickerProps } from '@21epub-ui/color-picker';
import { ColorPicker } from '@21epub-ui/color-picker';
import React from 'react';
import { Wrapper } from './Styled';

export interface FormColorPickerProps
  extends Omit<ColorPickerProps, 'onChange'> {
  value?: string;
  styled?: string;
  onChange?: (color: string) => void;
}

/**
 * @name 颜色选择器
 * @param value 组件的值（需要透明度时请传入 rgba 格式的颜色数值）
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param styles 子组件样式
 * @param palettes 色板配置
 * @param historySize 历史颜色数量
 * @param disabled 禁止修改颜色
 * @param onChangeComplete 颜色值修改完成时回调
 * @param renderIndicator 自定义颜色指示器 render 函数
 * @link 其他参数详见 https://github.com/21epub-ui/21epub-ui
 */
const FormColorPicker: React.FC<FormColorPickerProps> = (props) => {
  const { value, styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <ColorPicker
        color={value}
        styles={{ picker: { zIndex: 1050 } } as any}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormColorPicker;
