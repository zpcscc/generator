import { Cascade, Space } from '@dxsixpc/generator';
import { ResultTextarea } from 'docs/Common';
import { useState } from 'react';
import { provinceCityAreaCascadeData } from './province-city-china';

const App: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
  `;

  const onChange = (value: string[]) => {
    setValue(value);
  };

  // 级联数据格式。二维数组，相当于把用户每个可能的选项都列出来。
  // const cascadeDataMock = [
  //   ['北京市', '东城区', '东城区'],
  //   ['北京市', '西城区', '西城区'],
  //   ['北京市', '朝阳区', '朝阳区'],
  //   ['北京市', '丰台区', '丰台区'],
  //   ['北京市', '石景山区', '石景山区'],
  //   ['北京市', '海淀区', '海淀区'],
  //   ['北京市', '门头沟区', '门头沟区'],
  //   ['北京市', '房山区', '房山区'],
  //   ['北京市', '通州区', '通州区'],
  //   ['北京市', '顺义区', '顺义区'],
  //   ['北京市', '昌平区', '昌平区'],
  //   ['北京市', '大兴区', '大兴区'],
  //   ['北京市', '怀柔区', '怀柔区'],
  //   ['北京市', '平谷区', '平谷区'],
  //   ['北京市', '密云区', '密云区'],
  //   ['北京市', '延庆区', '延庆区'],
  // ];

  return (
    <Space size={100} align='end'>
      <Cascade
        value={value}
        level={3}
        showTextArea={true}
        placeholders={['请选择省份...', '请选择城市...', '请选择地区...', '请输入详细地址...']}
        // 级联数据
        cascadeData={provinceCityAreaCascadeData()}
        // 对内部的select组件进行配置
        selectOptions={{ size: 'large' }}
        // 对内部的textarea组件进行配置
        textAreaOptions={{ size: 'large' }}
        onChange={onChange}
        styled={styled}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
