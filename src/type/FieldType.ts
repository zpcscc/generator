import type * as fieldMao from 'src/fieldConfig';
import type { ComponentItemType } from './ComponentType';
import type { AnyObject } from './Custom';

// 字段配置默认类型，这里的类型用作左侧组件列表展示
export interface FieldConfigType<T = AnyObject> {
  // 左侧组件列表图标
  icon?: string;
  // 左侧组件列表名称
  label: string;
  // 组件初始数据
  componentItem: ComponentItemType<T>;
  // 右侧组件配置面板数据
  configPanel: (value?: AnyObject) => ComponentItemType[];
}

export type FieldMapType = Record<keyof typeof fieldMao, FieldConfigType>;

export interface EditorPropsType {
  currentId?: string;
  onSelect?: (id: string) => void;
  onDelete?: (id: string) => void;
  onCopy?: (id: string) => void;
}
