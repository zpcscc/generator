import { Cascade } from '@dxsixpc/generator';
import { provinceCityAreaCascadeData } from './province-city-china';

// 组件
const App: React.FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
  `;

  return (
    <Cascade
      value={['安徽省']}
      level={3}
      showTextArea={true}
      placeholders={['请选择省份...', '请选择城市...', '请选择地区...', '请输入详细地址...']}
      // 级联数据
      cascadeData={provinceCityAreaCascadeData()}
      // 对内部的select组件进行配置
      SelectOptions={{ size: 'large' }}
      // 对内部的textarea组件进行配置
      TextAreaOptions={{ size: 'large' }}
      styled={styled}
    />
  );
};

export default App;
