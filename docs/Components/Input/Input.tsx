import { Input } from '@dxsixpc/generator';

// 组件
const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    color: #66ccff;
  `;

  return <Input defaultValue={'这是输入框'} styled={styled} />;
};

export default App;
