import { type ComponentItemType } from 'src/type';

// 提交按钮配置项
export const submitButtonConfig = (): ComponentItemType[] => {
  return [
    {
      id: 'children',
      label: '按钮文案',
      type: 'Input',
      props: { placeholder: '请输入文案' },
    },
  ];
};
