import type { ButtonProps } from '@dxsixpc/components';
import type { FieldConfigType } from 'src/type';
import { submitButtonConfig } from './config';

// 提交按钮
const submitButton: FieldConfigType<ButtonProps> = {
  label: '提交按钮',
  componentItem: {
    id: 'submitButton',
    type: 'Button',
    props: {
      type: 'primary',
      children: '提交按钮',
      styled: {
        width: '100%',
      },
    },
  },
  configPanel: submitButtonConfig,
};

export default submitButton;
