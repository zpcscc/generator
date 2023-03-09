import { Alert } from '@dxsixpc/generator';

const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    .ant-alert-message {
      color: #66ccff;
    }
  `;
  return <Alert type='error' showIcon message={'这是警告提示'} styled={styled} />;
};

export default App;
