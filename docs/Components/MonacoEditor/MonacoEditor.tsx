import type { MonacoEditorProps } from '@dxsixpc/generator';
import { MonacoEditor } from '@dxsixpc/generator';

// 组件
const App: React.FC<MonacoEditorProps> = () => {
  const defaultValue = `
import { MonacoEditor } from '@dxsixpc/generator';

const App = () => {
  return <MonacoEditor height={300} language='javascript'/>;
};

export default App;
`;

  return <MonacoEditor height={300} defaultValue={defaultValue} language='javascript' />;
};

export default App;
