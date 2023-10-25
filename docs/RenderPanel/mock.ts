import { type ComponentItemType } from '@dxsixpc/generator';

export const pageData: ComponentItemType[] = [
  {
    id: 'Divider1',
    type: 'Divider',
    props: {
      children: '以下是表单组件演示',
    },
  },
  {
    label: '名称',
    id: 'title',
    type: 'Input',
    props: {
      placeholder: '请输入名称',
    },
  },
  {
    label: '爱好',
    id: 'hobby',
    type: 'Select',
    props: {
      placeholder: '请选择爱好',
      options: [
        { label: '唱歌', value: 'sing' },
        { label: '跳舞', value: 'jump' },
        { label: '游戏', value: 'game' },
        { label: '运动', value: 'sport' },
        { label: '睡觉', value: 'sleep' },
      ],
    },
  },
  {
    label: '性别',
    id: 'sex',
    type: 'RadioGroup',
    props: {
      optionsConfig: {
        type: 'Radio',
        defaultValue: 'secrecy',
        options: [
          { label: '男', value: 'man' },
          { label: '女', value: 'woman' },
          { label: '保密', value: 'secrecy' },
        ],
      },
    },
  },
  {
    label: '开关',
    id: 'switch',
    type: 'Switch',
  },
  {
    id: 'Divider2',
    type: 'Divider',
    props: {
      children: '以下是Collapse折叠面板演示',
    },
  },
  {
    id: 'Collapse',
    type: 'Collapse',
    props: {
      ghost: false,
      styled: {
        '.ant-collapse-header': {
          padding: '4px!important',
        },
      },
    },
    children: [
      {
        id: 'CollapsePanel1',
        type: 'CollapsePanel',
        props: {
          key: '1',
          header: '面板1',
        },
        children: [
          {
            id: 'CollapsePanelAlertSuccess',
            type: 'Alert',
            props: {
              message: '这是一个折叠框内的Alert成功提示',
              type: 'success',
              showIcon: true,
            },
            styled: {
              margin: '0px',
            },
          },
        ],
      },
      {
        id: 'CollapsePanel2',
        type: 'CollapsePanel',
        props: {
          key: '2',
          header: '面板2',
        },
        children: [
          {
            id: 'CollapsePanelAlertInfo',
            type: 'Alert',
            props: {
              message: '这是一个折叠框内的Alert信息提示',
              type: 'info',
              showIcon: true,
            },
            styled: {
              margin: '0px',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'Divider3',
    type: 'Divider',
    props: {
      children: '以下是Space间隔演示',
    },
  },
  {
    id: 'Space1',
    type: 'Space',
    props: {
      size: 'large',
    },
    children: [
      {
        id: 'SpaceAlertSuccess',
        type: 'Alert',
        props: {
          message: '这是一个Space内的提示信息',
          type: 'success',
          showIcon: true,
        },
        styled: {
          margin: '0px',
        },
      },
      {
        id: 'SpaceAlertInfo',
        type: 'Alert',
        props: {
          message: '这是一个提示信息',
          type: 'info',
          showIcon: true,
        },
        styled: {
          margin: '0px',
        },
      },
    ],
  },
  {
    id: 'Divider4',
    type: 'Divider',
    props: {
      children: '以下是Grid栅格布局演示',
    },
  },
  {
    id: 'Row',
    type: 'Row',
    props: {
      wrap: false,
      styled: {
        '.ant-col': {
          color: '#666699',
          '&': {
            '.ant-alert-message': {
              fontSize: '12px',
            },
          },
        },
      },
    },
    children: [
      {
        id: 'Col1',
        type: 'Col',
        props: {
          span: 8,
        },
        children: [
          {
            id: 'RowColAlertSuccess',
            type: 'Alert',
            props: {
              message: '这里是一条成功信息',
              type: 'success',
              showIcon: true,
            },
          },
        ],
      },
      {
        id: 'Col2',
        type: 'Col',
        props: {
          span: 8,
        },
        children: [
          {
            id: 'RowColAlertWarning',
            type: 'Alert',
            props: {
              message: '这里是一条警告信息',
              type: 'warning',
              showIcon: true,
            },
          },
          {
            id: 'RowColAlertError',
            type: 'Alert',
            props: {
              message: '这里是一条错误信息',
              type: 'error',
              showIcon: true,
            },
          },
        ],
      },
      {
        id: 'Col3',
        type: 'Col',
        props: {
          span: 8,
        },
        children: [
          {
            id: 'RowColAlertInfo',
            type: 'Alert',
            props: {
              message: '这里是一条提示信息',
              type: 'info',
              showIcon: true,
            },
          },
        ],
      },
    ],
  },
];
