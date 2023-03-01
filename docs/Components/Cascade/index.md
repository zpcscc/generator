---
title: Cascade
nav:
  title: 组件
group:
  title: 表单组件
---

# Cascade 级联组件

基于 <a href="https://ant-design.antgroup.com/index-cn" target="_blank">antd</a> 的 <a href="https://ant-design.antgroup.com/components/select-cn" target="_blank">Select</a> 与 <a href="https://ant-design.antgroup.com/components/input-cn#inputtextarea" target="_blank">Textarea</a> 组件封装的级联组件

<code src='./Cascade.tsx'>级联组件</code>

### Api：

| 参数            | 说明                                             | 类型                                                                                                          | 默认值                                            |
| --------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| value           | 组件值                                           | string[]                                                                                                      | []                                                |
| onChange        | 用户选择后返回的值                               | string[]                                                                                                      | []                                                |
| placeholders    | 占位提示                                         | string[]                                                                                                      | ['请选择...','请选择...','请选择...','请输入...'] |
| cascadeData     | 级联组件的选项值。每个选项的数组集合。           | [string[]]                                                                                                    | []                                                |
| level           | 级联层级，控制显示几个下拉选择框                 | number                                                                                                        | 3                                                 |
| showTextArea    | 是否显示文本域组件。通常用来让用户填写自定义信息 | boolean                                                                                                       | true                                              |
| selectOptions   | 内置下拉框组件的配置项                           | <a href="https://ant-design.antgroup.com/components/select-cn" target="_blank">SelectProps</a>                | {}                                                |
| textAreaOptions | 内置文本域组件的配置项                           | <a href="https://ant-design.antgroup.com/components/input-cn#inputtextarea" target="_blank">TextareaProps</a> | {}                                                |

<embed src="../index.md#L16-L20"></embed>

​
​
​
​
​
​

    	​
