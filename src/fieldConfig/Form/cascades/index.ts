import { type CascadeProps } from '@dxsixpc/components';
import { type FieldConfigType } from 'src/type';
import { cascadeConfig } from './config';
// import { provinceCityAreaCascadeData } from './province-city-china';

const cascadeDataMock = [
  ['北京市', '东城区', '东城区'],
  ['北京市', '西城区', '西城区'],
  ['北京市', '朝阳区', '朝阳区'],
  ['北京市', '丰台区', '丰台区'],
  ['北京市', '石景山区', '石景山区'],
  ['北京市', '海淀区', '海淀区'],
  ['北京市', '门头沟区', '门头沟区'],
  ['北京市', '房山区', '房山区'],
  ['北京市', '通州区', '通州区'],
  ['北京市', '顺义区', '顺义区'],
  ['北京市', '昌平区', '昌平区'],
  ['北京市', '大兴区', '大兴区'],
  ['北京市', '怀柔区', '怀柔区'],
  ['北京市', '平谷区', '平谷区'],
  ['北京市', '密云区', '密云区'],
  ['北京市', '延庆区', '延庆区'],
];

// 级联选择框
const cascade: FieldConfigType<CascadeProps> = {
  label: '级联组件',
  componentItem: {
    id: 'cascade',
    type: 'Cascade',
    label: '级联组件',
    showLabel: true,
    props: {
      level: 3,
      showTextArea: false,
      placeholders: ['请选择...', '请选择...', '请选择...', '请输入...'],
      cascadeData: cascadeDataMock,
      // cascadeData: provinceCityAreaCascadeData(),
      selectOptions: { size: 'large' },
      textAreaOptions: { size: 'large' },
    },
  },
  configPanel: cascadeConfig,
};

export default cascade;
