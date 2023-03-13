import type { ComponentItemType, OnEventChangeType, StructureItemType } from 'src/type';
import { getWrapper } from '../helpers';
import { strategy } from '../utils';
import renderItem from './renderItem';
import type { BaseRenderType } from './type';

// 渲染组件列表参数
export interface LoopRenderProps extends BaseRenderType {
  componentItems: ComponentItemType[];
  structureItems: StructureItemType[];
  onEventChange?: OnEventChangeType;
  currentId?: string;
}

// 循环渲染页面
const loopRender = (props: LoopRenderProps): React.ReactNode => {
  const {
    componentItems,
    structureItems,
    defaultValue,
    componentMap,
    type,
    onEventChange,
    currentId,
  } = props;
  const isEditor = type === 'editor';
  const Wrapper = getWrapper(type);
  const wrapperProps = isEditor ? { items: structureItems, strategy } : {};
  const ComponentWrapper = getWrapper(isEditor ? 'component' : 'play');

  return (
    <Wrapper {...wrapperProps}>
      {structureItems?.map((structureItem: StructureItemType) => {
        const { id } = structureItem || {};
        const componentWrapperProps = isEditor ? { id, onEventChange, currentId } : {};
        return (
          <ComponentWrapper key={id} {...componentWrapperProps}>
            {renderItem({
              componentItems,
              structureItem,
              defaultValue,
              componentMap,
              type,
              currentId,
            })}
          </ComponentWrapper>
        );
      })}
    </Wrapper>
  );
};

export default loopRender;
