---
title: Options
nav:
  title: 组件
group:
  title: 表单组件
---

# Options 选项配置组件

配置生成的值，用于[RadioGroup](/components/radio-group)、[CheckboxGroup](/components/checkbox-group)的`optionsConfig`值

基于 <a href="https://ant-design.antgroup.com/index-cn" target="_blank">antd</a> 的 <a href="https://ant-design.antgroup.com/components/input-cn" target="_blank">Input</a> 组件封装

<code src='./Options.tsx'>选项配置组件</code>

### Api：

| 参数          | 说明                                                                                                                       | 类型                                               | 默认值           |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------------- |
| value         | 组件值                                                                                                                     | [optionsConfig](/components/options#optionsconfig) | {}               |
| onChange      | 用户选择后返回的值                                                                                                         | [optionsConfig](/components/options#optionsconfig) | {}               |
| optionsConfig | 选项配置,格式参考上方 demo 的代码                                                                                          | [optionsConfig](/components/options#optionsconfig) | {}               |
| inputOptions  | 内置列表组件的配置项，具体 api 参考<a href="https://ant-design.antgroup.com/components/input-cn" target="_blank">Input</a> | object                                             | {size:'default'} |

#### optionsConfig

| 参数         | 说明                         | 类型                                     | 默认值                            |
| ------------ | ---------------------------- | ---------------------------------------- | --------------------------------- |
| type         | 选项类型                     | `Radio`                                  | `Checkbox`                        |
| defaultValue | 默认选中的值，或用户选中的值 | `string`                                 | `(string \| number)[]`            |
| options      | 单个选项配置                 | [options[]](/components/options#options) | [{label:'选项 1',value:'选项 1'}] |

#### options

| 参数    | 说明                                     | 类型    | 默认值   |
| ------- | ---------------------------------------- | ------- | -------- |
| label   | 展示给用户看的选项名称                   | string  | '选项 1' |
| value   | 返回值，真实的值。用于传给后端保存的内容 | any     | '选项 1' |
| checked | 当前选项是否被选中                       | boolean | false    |
| id      | 当前选项 id                              | string  | 'op'     |

<embed src="../index.md#L16-L20"></embed>
