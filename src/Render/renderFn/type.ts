import type { RenderProps } from 'src/Render';
import type { AnyObject, ComponentMapType } from 'src/type';

export interface BaseRenderType {
  defaultValue?: AnyObject;
  componentMap?: ComponentMapType;
  type?: RenderProps['type'];
}
