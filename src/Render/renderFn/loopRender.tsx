import type { ComponentItemType, StructureItemType } from 'src/type';
import { getWrapper } from '../helpers';
import { strategy } from '../utils';
import renderItem from './renderItem';
import type { BaseRenderType } from './type';

// 渲染组件列表参数
export interface LoopRenderProps extends BaseRenderType {
  componentItems: ComponentItemType[];
  structureItems: StructureItemType[];
}

// 循环渲染页面
const loopRender = (props: LoopRenderProps): React.ReactNode => {
  const { componentItems, structureItems, defaultValue, componentMap, type } = props;
  const isEditor = type === 'editor';
  const wrapperProps = isEditor ? { items: structureItems, strategy } : {};
  const Wrapper = getWrapper(type);
  const ComponentWrapper = getWrapper(isEditor ? 'component' : 'play');

  return (
    <Wrapper {...wrapperProps}>
      {structureItems?.map((structureItem: StructureItemType) => {
        const { id } = structureItem;
        const componentWrapperProps = isEditor ? { id } : {};
        return (
          <ComponentWrapper key={id} {...componentWrapperProps}>
            {renderItem({ componentItems, structureItem, defaultValue, componentMap, type })}
          </ComponentWrapper>
        );
      })}
    </Wrapper>
  );
};

export default loopRender;
