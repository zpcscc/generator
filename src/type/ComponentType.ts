import type { FormItemProps } from 'antd';
import type { AnyObject } from './Custom';
import type { OptionsConfigType } from './OptionsConfigType';

/**
 * @name component组件参数的类型
 */
export interface ComponentPropsType {
  // 选项组件的配置
  optionsConfig?: OptionsConfigType;
  // 自定义属性
  [key: string]: any;
}

/**
 * @name component对象的类型
 */
export interface ComponentItemType extends Omit<FormItemProps, 'children'> {
  // 每个组件的唯一标识id
  id?: string;
  // 组件对应的name，单个表单中的区分组件的唯一标识
  name?: string;
  // 组件标题名称
  label?: string;
  // 组件的类型
  type: string;
  // 组件的参数集合，props里的内容会传到组件里
  props?: ComponentPropsType;
  // 隐藏组件
  hidden?: boolean;
  // 可嵌套的子组件
  children?: ComponentItemType[];
  // 组件自定义样式
  styled?: AnyObject;
}

export interface ComponentStructureType {
  // 每个组件的唯一标识id
  id?: string;
  // 组件对应的name，单个表单中的区分组件的唯一标识，语义化,与接口对应属性字段相同
  name: string;
  // 可嵌套的子组件
  children?: ComponentStructureType[];
}

export interface StyledType {
  [key: string]: React.CSSProperties | StyledType;
}

export type ComponentMapType = Record<string, React.FC>;
