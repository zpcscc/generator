import type { AnyObject, ComponentMapType, EditorPropsType } from 'src/type';

export interface BaseRenderType {
  defaultValue?: AnyObject;
  componentMap?: ComponentMapType;
  editorProps?: EditorPropsType;
}
