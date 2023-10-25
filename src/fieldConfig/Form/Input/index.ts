import { type InputProps } from '@dxsixpc/components';
import { type FieldConfigType } from 'src/type';
import { inputConfig } from './config';

// 输入框
const input: FieldConfigType<InputProps> = {
  label: '输入框',
  componentItem: {
    id: 'input',
    type: 'Input',
    showLabel: true,
    label: '输入框',
    props: {
      placeholder: '请输入单行文本',
      size: 'large',
    },
  },
  configPanel: inputConfig,
};

export default input;
