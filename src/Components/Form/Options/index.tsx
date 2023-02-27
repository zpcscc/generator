import { PlusOutlined } from '@ant-design/icons';
import type { OptionsConfigType } from '@dxsixpc/generator/type';
import { Button } from 'antd';
import { uniqueId } from 'lodash';
import { useState } from 'react';
import OptionsContainer from './OptionsContainer';
import { Wrapper } from './Styled';
import type { CurrOptionsConfigType, CurrOptionType } from './type';
import { formatOptionsConfig } from './utils';

export interface OptionsProps {
  value?: OptionsConfigType;
  optionsConfig: OptionsConfigType;
  styled?: string;
  onChange?: (optionsConfig: OptionsConfigType) => void;
}

/**
 * @name 选项配置
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param optionsConfig 选项配置
 */
const Options: React.FC<OptionsProps> = (props) => {
  const { value, styled, onChange } = props;
  const [optionsConfig, setOptionsConfig] = useState<CurrOptionsConfigType>(
    formatOptionsConfig(value || props.optionsConfig),
  );

  const onOptionsConfigChange = (newOptionsConfig: CurrOptionsConfigType) => {
    const { options } = newOptionsConfig;
    // 设置选中的默认值
    let defaultValue: string[] | string = optionsConfig?.type === 'Checkbox' ? [] : '';
    options?.forEach((option: CurrOptionType) => {
      if (option?.checked) {
        if (optionsConfig?.type === 'Checkbox') {
          (defaultValue as string[]).push(option.value);
        } else {
          (defaultValue as string) = option.value;
        }
      }
    });
    setOptionsConfig({ ...newOptionsConfig, defaultValue });
    onChange?.({ ...newOptionsConfig, defaultValue });
  };

  // 添加选项
  const addOption = () => {
    const optionsLength = optionsConfig?.options?.length;
    const newOptions = optionsConfig?.options?.concat({
      id: uniqueId('op'),
      label: `选项${optionsLength + 1}`,
      value: `选项${optionsLength + 1}`,
      checked: false,
    });
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions,
    });
  };

  return (
    <Wrapper styled={styled}>
      <OptionsContainer
        optionsConfig={optionsConfig}
        onOptionsConfigChange={onOptionsConfigChange}
      />
      <Button type='text' style={{ color: '#00bcd4' }} onClick={addOption}>
        <PlusOutlined /> 添加选项
      </Button>
    </Wrapper>
  );
};

export default Options;
