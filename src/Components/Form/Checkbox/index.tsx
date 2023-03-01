import type { SpaceProps } from '@dxsixpc/generator';
import { Space } from '@dxsixpc/generator';
import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxProps as AntCheckboxProps } from 'antd/es/checkbox';

export interface CheckboxProps extends Omit<AntCheckboxProps, 'onChange'> {
  // 前缀内容
  prefix?: string | React.ReactNode;
  // 后缀内容
  suffix?: string | React.ReactNode;
  // 自定义样式,使用css-in-js的语法
  styled?: string;
  // Space组件配置
  spaceOptions?: SpaceProps;
  // 选项改变时
  onChange: (value: boolean) => void;
}

/**
 * @name 单个勾选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`width:'100%'`
 * @param prefix 前缀内容
 * @param suffix 后缀内容
 * @param spaceOptions Space组件配置
 * @link https://ant.design/components/checkbox-cn/
 */
const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { value, prefix, suffix, spaceOptions, styled, onChange, ...rest } = props;

  return (
    <Space styled={styled} {...spaceOptions}>
      {prefix}
      <AntCheckbox
        checked={Boolean(value)}
        onChange={(e) => onChange?.(e?.target?.checked)}
        {...rest}
      />
      {suffix}
    </Space>
  );
};

export default Checkbox;
