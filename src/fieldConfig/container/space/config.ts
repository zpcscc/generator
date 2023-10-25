import { type ComponentItemType } from 'src/type';

// 间隔配置项
export const spaceConfig = (): ComponentItemType[] => {
  return [
    {
      id: 'direction',
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
    {
      id: 'align',
      label: '对齐方式',
      type: 'Select',
      props: {
        placeholder: '请选择排列方向',
        options: [
          { label: '首部对齐', value: 'start' },
          { label: '尾部对齐', value: 'end' },
          { label: '居中对齐', value: 'center' },
          { label: '基准线对齐', value: 'baseline' },
        ],
      },
    },
  ];
};
