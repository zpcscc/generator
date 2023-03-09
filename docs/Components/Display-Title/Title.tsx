import { Title } from '@dxsixpc/generator';

const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    .ant-typography {
      color: #66ccff;
    }
  `;
  return <Title styled={styled}>{'这是标题'}</Title>;
};

export default App;
