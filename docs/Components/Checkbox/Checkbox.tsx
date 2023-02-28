import { Checkbox, Input, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<boolean>(true);

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
  `;

  const onChange = (value: boolean) => {
    setValue(value);
  };

  return (
    <Space size={100}>
      <Checkbox
        value={value}
        onChange={onChange}
        prefix={<Input />}
        suffix={'后缀内容'}
        styled={styled}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
