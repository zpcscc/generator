import type { MonacoEditorProps } from '@dxsixpc/generator';
import { MonacoEditor, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC<MonacoEditorProps> = () => {
  const defaultValue = `
import { MonacoEditor } from '@dxsixpc/generator';

const App = () => {
  return <MonacoEditor height={400} language='javascript'/>;
};

export default App;
`;
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const onChange = (value?: string) => {
    setValue(value);
  };

  const spaceStyled = `
    display: flex;
    justify-content: space-between;
  `;

  const resultTextareaStyled = `
    textarea {
      width: 390px!important;
      height: 368px;
    }
  `;

  return (
    <Space styled={spaceStyled} align='end'>
      <MonacoEditor
        value={defaultValue}
        height={400}
        width={600}
        language='javascript'
        onChange={onChange}
      />
      <ResultTextarea value={value} styled={resultTextareaStyled} />
    </Space>
  );
};

export default App;
