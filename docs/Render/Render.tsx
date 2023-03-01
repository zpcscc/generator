// import { FormRender, PageRender } from '@dxsixpc/generator';
import { Space } from 'antd';

interface RenderProps {
  value: string;
}

// 渲染器
const Render: React.FC<RenderProps> = () => {
  return (
    <Space>
      {'这是渲染器(待开发)'}
      {/* <FormRender />
      <PageRender /> */}
    </Space>
  );
};

export default Render;
