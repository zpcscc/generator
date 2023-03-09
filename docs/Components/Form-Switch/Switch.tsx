import { Space, Switch } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<boolean>(true);

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    color: #66ccff;
  `;

  const onChange = (value: boolean) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Switch value={value} onChange={onChange} styled={styled} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
