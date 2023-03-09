import { Button, Space } from '@dxsixpc/generator';

const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    button {
      width: 100px;
      span {
        color: #66ccff;
      }
    }
  `;

  const onClick = () => {
    console.log('点击了按钮');
  };

  return (
    <Space>
      <Button styled={styled} onClick={onClick}>
        {'这是按钮1'}
      </Button>
      <Button styled={styled} onClick={onClick}>
        {'这是按钮2'}
      </Button>
    </Space>
  );
};

export default App;
