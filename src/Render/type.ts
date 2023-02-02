import type { FormInstance, FormProps } from 'antd';
import type {
  ComponentItemType,
  ComponentMapType,
  ComponentStructureType,
} from 'src/types';

export interface RenderProps {
  // 表单组件列表
  componentItems: ComponentItemType[];
  // 表单结构,布局
  componentStructure?: ComponentStructureType[];
  // 自定义component对象
  componentMap?: ComponentMapType;
  // 初始值
  initialValues?: AnyObject;
  // 表单参数
  formProps?: FormProps;
  // 数据改变时
  onValuesChange: (
    changedValues: AnyObject,
    values: AnyObject,
    form: FormInstance<any>,
  ) => void;
}
