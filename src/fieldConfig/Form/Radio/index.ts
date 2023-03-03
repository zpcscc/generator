import type { FieldConfigType } from 'src/type';
import { radioOptionsConfig } from '../../commonConfig';
import { radioConfig } from './config';

// 单选
const radio: FieldConfigType = {
  label: '单选',
  componentItem: {
    id: 'radio',
    type: 'RadioGroup',
    label: '单选',
    showLabel: true,
    props: {
      size: 'large',
      optionsConfig: radioOptionsConfig().props?.optionsConfig,
    },
  },
  configPanel: radioConfig,
};

export default radio;
