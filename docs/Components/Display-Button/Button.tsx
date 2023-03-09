import { Button } from '@dxsixpc/generator';

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
    <Button styled={styled} onClick={onClick}>
      {'这是按钮'}
    </Button>
  );
};

export default App;
