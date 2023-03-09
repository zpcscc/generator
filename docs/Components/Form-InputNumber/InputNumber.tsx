import { InputNumber, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<string | number | null>(null);

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
  `;

  const onChange = (value: string | number | null) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <InputNumber value={value} placeholder={'请输入数字'} onChange={onChange} styled={styled} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
