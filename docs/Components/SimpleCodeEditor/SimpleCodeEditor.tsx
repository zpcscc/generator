import type { SimpleCodeEditorProps } from '@dxsixpc/generator';
import { SimpleCodeEditor, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';

const App: React.FC<SimpleCodeEditorProps> = () => {
  const defaultValue = `
import { SimpleCodeEditor } from '@dxsixpc/generator';

const App = () => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value?: string) => {
    setValue(value);
  };

  return <SimpleCodeEditor value={value} language='javascript' onChange={onChange}/>;
};

export default App;
`;
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  const spaceStyled = `
    display: flex;
    justify-content: space-between;
  `;

  const resultTextareaStyled = `
    textarea {
      width: 400px!important;
      height: 300px;
    }
  `;

  const simpleCodeEditorStyled = `
    & > div {
      width: 400px;
      height: 300px;
    }
  `;

  return (
    <Space styled={spaceStyled} align='end'>
      <SimpleCodeEditor
        value={value}
        language='javascript'
        onChange={onChange}
        styled={simpleCodeEditorStyled}
      />
      <ResultTextarea value={value} styled={resultTextareaStyled} />
    </Space>
  );
};

export default App;
