import { Collapse, CollapsePanel } from '@dxsixpc/generator';

const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    .ant-collapse-header-text {
      color: #66ccff;
    }
  `;
  return (
    <Collapse styled={styled}>
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
  );
};

export default App;
