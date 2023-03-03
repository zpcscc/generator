import type { ComponentItemType } from 'src/type';

// 间隔配置项
export const spaceConfig = (): ComponentItemType[] => {
  return [
    {
      id: 'optionsConfig',
      label: '排列方向',
      type: 'Select',
      props: {
        placeholder: '请选择排列方向',
        options: [
          { label: '水平排列', value: 'horizontal' },
          { label: '垂直排列', value: 'vertical' },
        ],
      },
    },
  ];
};
