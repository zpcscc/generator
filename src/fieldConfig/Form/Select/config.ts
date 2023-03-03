import type { ComponentItemType } from 'src/type';
import { labelSpaceConfig, placeholderConfig } from '../../commonConfig';

// 下拉框组件配置项
export const selectConfig = (): ComponentItemType[] => {
  return [
    labelSpaceConfig(),
    placeholderConfig(),
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
