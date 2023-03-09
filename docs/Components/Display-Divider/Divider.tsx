import { Divider } from '@dxsixpc/generator';

const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    .ant-divider {
      color: #66ccff;
    }
  `;
  return <Divider styled={styled}>{'这是分割线'}</Divider>;
};

export default App;
