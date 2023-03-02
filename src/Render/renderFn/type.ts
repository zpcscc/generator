import type { AnyObject, ComponentItemType, ComponentMapType } from '@dxsixpc/generator/type';

// 渲染组件列表参数
export interface LoopRenderProps {
  componentItems: ComponentItemType[];
  initialValues?: AnyObject;
  componentMap?: ComponentMapType;
}

// 渲染单个组件参数
export interface ComponentRenderProps extends LoopRenderProps {
  componentItem: ComponentItemType;
}
