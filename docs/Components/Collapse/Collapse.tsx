import { Collapse, CollapsePanel, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<string | string[]>([]);

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    .ant-collapse-header-text {
      color: #66ccff;
    }
  `;

  const onChange = (value: string | string[]) => {
    setValue(value);
  };

  return (
    <Space size={100}>
      <Collapse styled={styled} onChange={onChange}>
        <CollapsePanel key={'1'} header='面板1'>
          {'内容1'}
        </CollapsePanel>
        <CollapsePanel key={'2'} header='面板2'>
          {'内容2'}
        </CollapsePanel>
        <CollapsePanel key={'3'} header='面板3'>
          {'内容3'}
        </CollapsePanel>
      </Collapse>
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
