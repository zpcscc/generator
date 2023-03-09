import type { ComponentItemType } from 'src/type';
import { labelSpaceConfig } from '../../commonConfig';

// 单选组件配置项
export const radioConfig = (): ComponentItemType[] => {
  return [
    labelSpaceConfig(),
    {
      label: '选项',
      id: 'optionsConfig',
      type: 'Options',
      props: {
        placeholder: '请选择',
        optionsConfig: {
          type: 'Radio',
          defaultValue: '',
          options: [
            { label: '选项1', value: '选项1' },
            { label: '选项2', value: '选项2' },
            { label: '选项3', value: '选项3' },
          ],
        },
      },
    },
  ];
};
