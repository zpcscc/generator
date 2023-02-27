import type { FormInstance, FormProps } from 'antd';
import { Form } from 'antd';
import type { ComponentItemType, ComponentMapType, ComponentStructureType } from 'src/types';
import { separateToIntegrate } from '../CommonRender';
import LoopRender from '../CommonRender/LoopRender';
import { FormWrapper } from './Styled';

interface FormRenderProps {
  initialValues?: AnyObject;
  // 表单结构,布局
  componentStructure?: ComponentStructureType[];
  // 表单组件列表
  componentItems: ComponentItemType[];
  // 外部传入的自定义组件对象
  componentMap?: ComponentMapType;
  formProps?: FormProps;
  onValuesChange: (changedValues: AnyObject, values: any, form: FormInstance<any>) => void;
}

/**
 * @name 表单渲染
 * @param initialValues 初始值
 * @param componentStructure 表单的布局结构
 * @param componentList 组件配置列表
 * @param componentMap 自定义组件实例列表
 * @param onValuesChange 表单值改变时的回调
 * @param formProps 表单组件props
 * @link formProps参数详见 https://ant.design/components/form-cn/#Form
 */
const FormRender: React.FC<FormRenderProps> = (props) => {
  const {
    initialValues = {},
    componentStructure,
    componentItems,
    componentMap = {},
    formProps,
    onValuesChange,
  } = props;
  const [form] = Form.useForm();
  // const [formValues, setFormValues] = useState<AnyObject>(initialValues);
  const newComponentList = separateToIntegrate(componentItems, componentStructure);

  // 优化性能，数据未变化时，不重复渲染
  // const formValueMemo = useMemo(() => formValues, [formValues]);

  const onFormValuesChange = (changedValues: AnyObject, values: any) => {
    // 获取当前改变字段的name值
    // const [name] = Object.keys(changedValues);
    // 判断改变的字段，有没有包含children。
    // const isHaveChildren = Boolean(
    //   componentItems.find((item) => item.name === name)?.children,
    // );
    // 若有children，则表示此字段的值可能会用于判断渲染children
    // if (isHaveChildren) setFormValues(values);
    onValuesChange(changedValues, values, form);
  };

  return (
    <FormWrapper form={form} layout='vertical' onValuesChange={onFormValuesChange} {...formProps}>
      <LoopRender
        componentItems={newComponentList}
        initialValues={initialValues}
        componentMap={componentMap}
      />
    </FormWrapper>
  );
};

export default FormRender;
