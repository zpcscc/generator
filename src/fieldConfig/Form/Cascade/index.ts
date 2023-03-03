import type { FieldConfigType } from 'src/type';
import { cascadeConfig } from './config';
import { provinceCityAreaCascadeData } from './province-city-china';

// 级联选择框
const cascade: FieldConfigType = {
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
      cascadeData: provinceCityAreaCascadeData(),
      selectOptions: { size: 'large' },
      textAreaOptions: { size: 'large' },
    },
  },
  configPanel: cascadeConfig,
};

export default cascade;
