import type { AnyObject, ComponentItemType, ComponentMapType } from 'src/type';

// 渲染组件列表参数
export interface LoopRenderProps {
  componentItems: ComponentItemType[];
  defaultValue?: AnyObject;
  componentMap?: ComponentMapType;
  index?: number;
}

// 渲染单个组件参数
export interface ComponentRenderProps extends LoopRenderProps {
  componentItem: ComponentItemType;
}
