import { getComponent } from '@dxsixpc/components';
import { isEmpty } from 'lodash';
import type { ComponentItemType, StructureItemType } from 'src/type';
import { isContainer } from 'src/utils';
import { getWrapper } from '../helpers';
import loopRender from './loopRender';
import type { BaseRenderType } from './type';

export interface ContainerRenderProps extends BaseRenderType {
  componentItem?: ComponentItemType;
  structureItem?: StructureItemType;
  componentItems: ComponentItemType[];
}

// 渲染包含children的布局组件
const containerRender = (props: ContainerRenderProps) => {
  const { componentItem, componentItems, structureItem, componentMap, defaultValue, editorProps } =
    props;
  const { id = '', children } = structureItem || {};
  const { type, hidden } = componentItem || {};
  const isEditor = !isEmpty(editorProps);
  if ((isEditor && !isContainer(id)) || !children || hidden) return;
  const { Wrapper, wrapperProps } = getWrapper(
    isEditor ? 'editor' : 'play',
    structureItem,
    componentItem,
  );
  const Component = getComponent(type);
  return (
    <Wrapper {...wrapperProps}>
      <Component key={id} {...componentItem?.props}>
        {loopRender({
          componentItems,
          structureItems: children,
          defaultValue,
          componentMap,
          editorProps,
        })}
      </Component>
    </Wrapper>
  );
};

export default containerRender;
