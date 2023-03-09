import { Col, Row } from '@dxsixpc/generator';

const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    width: 100%;
    .ant-col {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ant-col:nth-child(odd) {
      background-color: #66ccff;
    }
    .ant-col:nth-child(even) {
      background-color: #217bfb;
    }
  `;
  return (
    <Row styled={styled}>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  );
};

export default App;
