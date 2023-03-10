import type { FormInstance, FormProps } from 'antd';
import { ConfigProvider, Form } from 'antd';
import { isEmpty } from 'lodash';
import type { AnyObject, ComponentItemType, ComponentMapType, StructureItemType } from 'src/type';
import { loopRender } from './renderFn';
import { FormWrapper } from './Styled';
import { integrateToSeparate } from './utils';

export interface RenderProps {
  // 表单组件列表
  componentItems?: ComponentItemType[];
  // 渲染类型
  type?: 'editor' | 'play';
  // 初始值
  defaultValue?: AnyObject;
  // 表单结构,布局
  structureItems?: StructureItemType[];
  // 外部传入的自定义组件对象
  componentMap?: ComponentMapType;
  // 表单参数
  formOptions?: FormProps;
  // 值改变时
  onChange?: (changedValues: AnyObject, values: AnyObject, form: FormInstance<any>) => void;
  // 选中的元素
  onSelect?: (selectId: string) => void;
}

/**
 * @name 渲染器
 * @param defaultValue 初始值
 * @param structureItems 表单的布局结构
 * @param componentList 组件配置列表
 * @param componentMap 自定义组件实例列表
 * @param onValuesChange 表单值改变时的回调
 * @param formOptions 表单组件props
 * @link formOptions参数详见 https://ant.design/components/form-cn/#Form
 */
const Render: React.FC<RenderProps> = (props) => {
  const {
    type = 'play',
    defaultValue = {},
    componentMap = {},
    formOptions,
    onChange,
    onSelect,
  } = props;
  const [form] = Form.useForm();
  const useComponentStructure = !isEmpty(props.structureItems);
  const componentItemState = integrateToSeparate(props.componentItems || []);
  const componentItems = useComponentStructure
    ? props.componentItems || []
    : componentItemState.componentItems;
  const structureItems = useComponentStructure
    ? props.structureItems || []
    : componentItemState.structureItems;

  const onFormValuesChange = (changedValues: AnyObject, values: any) => {
    onChange?.(changedValues, values, form);
  };

  return (
    <ConfigProvider>
      <FormWrapper
        form={form}
        layout='vertical'
        onValuesChange={onFormValuesChange}
        onClick={(e) => onSelect?.((e.target as HTMLDivElement).id)}
        {...formOptions}
      >
        {loopRender({
          componentItems,
          structureItems,
          defaultValue,
          componentMap,
          type,
        })}
      </FormWrapper>
    </ConfigProvider>
  );
};

export default Render;
