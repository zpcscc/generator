import { type ComponentItemType } from 'src/type';
import { labelSpaceConfig } from '../../commonConfig';

// 级联组件配置项
export const cascadeConfig = (): ComponentItemType[] => {
  return [
    labelSpaceConfig(),
    {
      id: 'cascadeData',
      type: 'TextArea',
      props: { placeholder: '可批量添加，以逗号分割，回车换行' },
    },
    {
      label: '级联层级',
      id: 'level',
      type: 'Select',
      props: {
        placeholder: '请选择层级。。。',
        options: [
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
        ],
      },
    },
    {
      id: 'showTextArea',
      type: 'Checkbox',
      props: { suffix: '显示文本框' },
    },
    // 占位符配置
    {
      label: '占位符',
      id: 'placeholder',
      type: 'InputGroup',
      props: {
        placeholders: Array(4)
          .fill('')
          .map((_item, index) => `请输入第${index + 1}级占位符。。。`),
        level: 4,
      },
    },
  ];
};
