import type { CheckboxGroupProps, OptionsConfigType } from '@dxsixpc/generator';
import { CheckboxGroup, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<CheckboxGroupProps['value']>([]);

  // css-in-js写法的自定义样式
  const styled = `
    .ant-checkbox-group{
      width: 400px;
    }
  `;

  const onChange = (value: CheckboxGroupProps['value']) => {
    setValue(value);
  };

  const optionsConfig: OptionsConfigType<'Checkbox'> = {
    type: 'Checkbox',
    defaultValue: ['选项1'],
    options: [
      { label: '选项1', value: '选项1' },
      { label: '选项2', value: '选项2' },
      { label: '选项3', value: '选项3' },
    ],
  };

  return (
    <Space size={100} align='end'>
      <CheckboxGroup
        value={value}
        onChange={onChange}
        styled={styled}
        // 组件选项配置
        optionsConfig={optionsConfig}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
