import type { ComponentItemType } from '@dxsixpc/generator';

export const pageData: ComponentItemType[] = [
  {
    type: 'Divider',
    props: {
      children: '以下是表单组件演示',
    },
  },
  {
    label: '名称',
    name: 'title',
    type: 'Input',
    props: {
      placeholder: '请输入名称',
    },
  },
  {
    label: '爱好',
    name: 'hobby',
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
    name: 'sex',
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
    name: 'switch',
    type: 'Switch',
  },
  {
    type: 'Divider',
    props: {
      children: '以下是Collapse折叠面板演示',
    },
  },
  {
    name: 'Collapse',
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
        name: 'CollapsePanel1',
        type: 'CollapsePanel',
        props: {
          key: '1',
          header: '面板1',
        },
        children: [
          {
            name: 'CollapsePanelAlertSuccess',
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
        name: 'CollapsePanel2',
        type: 'CollapsePanel',
        props: {
          key: '2',
          header: '面板2',
        },
        children: [
          {
            name: 'CollapsePanelAlertInfo',
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
    type: 'Divider',
    props: {
      children: '以下是Space间隔演示',
    },
  },
  {
    name: 'Space',
    type: 'Space',
    props: {
      size: 'large',
    },
    children: [
      {
        name: 'SpaceAlertSuccess',
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
        name: 'SpaceAlertInfo',
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
    type: 'Divider',
    props: {
      children: '以下是Grid栅格布局演示',
    },
  },
  {
    name: 'Row',
    type: 'Row',
    props: {
      wrap: false,
      styled: {
        '.ant-col': {
          color: '#666699',
          '&': {
            '.ant-alert-message': {
              'font-size': '12px',
            },
          },
        },
      },
    },
    children: [
      {
        name: 'Col1',
        type: 'Col',
        props: {
          span: 8,
        },
        children: [
          {
            name: 'RowColAlertSuccess',
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
        name: 'Col2',
        type: 'Col',
        props: {
          span: 8,
        },
        children: [
          {
            name: 'RowColAlertWarning',
            type: 'Alert',
            props: {
              message: '这里是一条警告信息',
              type: 'warning',
              showIcon: true,
            },
          },
          {
            name: 'RowColAlertError',
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
        name: 'Col3',
        type: 'Col',
        props: {
          span: 8,
        },
        children: [
          {
            name: 'RowColAlertInfo',
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
