import { type AnyObject, type ComponentMapType, type EditorPropsType } from 'src/type';

export interface BaseRenderType {
  defaultValue?: AnyObject;
  componentMap?: ComponentMapType;
  editorProps?: EditorPropsType;
}
