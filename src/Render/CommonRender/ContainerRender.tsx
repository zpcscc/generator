import type { ComponentItemType, ComponentMapType } from 'src/types';
import { styledToString } from './helpers';
import LoopRender from './LoopRender';

interface ContainerRenderProps {
  initialValues: any;
  componentItem: ComponentItemType;
  componentMap?: ComponentMapType;
  Component: React.FC<any>;
}

/**
 * @name 循环渲染器
 * @param props widget的参数
 * @returns
 */
// 渲染包含children的布局组件
const ContainerRender: React.FC<ContainerRenderProps> = (props) => {
  const { componentItem, componentMap, Component, initialValues } = props;
  const { id = '', name = '', children, hidden } = componentItem;
  if (!children || hidden) return null;
  return (
    <Component
      key={id + name}
      {...componentItem?.props}
      styled={styledToString(componentItem?.props?.styled)}
    >
      <LoopRender
        componentItems={children}
        initialValues={initialValues}
        componentMap={componentMap}
      />
    </Component>
  );
};

export default ContainerRender;
