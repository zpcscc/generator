import React from 'react';
// import FormRender from './FormRender';
import PageRender from './PageRender';
import { RenderWrapper } from './Styled';
import type { RenderProps } from './type';

/**
 * @name 表单渲染
 * @param initialValues 初始值
 * @param WidgetStructure 表单的布局结构
 * @param WidgetList 组件配置列表
 * @param WidgetMap 自定义组件实例列表
 * @param onValuesChange 表单值改变时的回调
 * @param formProps 表单组件props
 * @link formProps参数详见 https://ant.design/Widgets/form-cn/#Form
 */
const Render: React.FC<RenderProps> = (props) => {
  return (
    <RenderWrapper>
      <PageRender {...props} />
      {/* <FormRender {...props} /> */}
    </RenderWrapper>
  );
};

export default Render;
