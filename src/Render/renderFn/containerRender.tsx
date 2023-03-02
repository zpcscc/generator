import { omit } from 'lodash';
import { getComponent } from '../../Components';
import { styledToString } from '../helpers';
import loopRender from './loopRender';
import type { ComponentRenderProps } from './type';

// 渲染包含children的布局组件
const containerRender = (props: ComponentRenderProps) => {
  const { componentItem, componentMap, initialValues } = props;
  const { id = '', name = '', type, children, hidden } = componentItem || {};
  if (!children || hidden) return;
  const Component = getComponent(type);
  return (
    <Component
      key={id + name}
      {...omit(componentItem?.props, ['styled'])}
      styled={styledToString(componentItem?.props?.styled)}
    >
      {loopRender({
        componentItems: children,
        componentMap,
        initialValues,
      })}
    </Component>
  );
};

export default containerRender;
