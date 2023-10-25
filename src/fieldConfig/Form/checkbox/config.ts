import { type ComponentItemType } from 'src/type';
import { labelSpaceConfig } from '../../commonConfig';

// 多选框组件配置项
export const checkboxConfig = (): ComponentItemType[] => {
  return [
    labelSpaceConfig(),
    {
      label: '选项',
      id: 'optionsConfig',
      type: 'Options',
      props: {
        optionsConfig: {
          type: 'Checkbox',
          options: [
            { label: '选项1', value: '选项1' },
            { label: '选项2', value: '选项2' },
            { label: '选项3', value: '选项3' },
          ],
        },
      },
    },
    {
      id: 'Space',
      type: 'Space',
      children: [
        {
          label: '最少选择几项',
          id: 'min',
          type: 'InputNumber',
          props: { placeholder: '用户最少选择几项' },
        },
        {
          label: '最多选择几项',
          id: 'max',
          type: 'InputNumber',
          props: { placeholder: '用户最多选择几项' },
        },
      ],
    },
  ];
};
