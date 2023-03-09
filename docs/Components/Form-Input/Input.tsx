import { Input, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('这是输入框');

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    color: #66ccff;
  `;

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Input value={value} placeholder={'请输入内容'} onChange={onChange} styled={styled} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
