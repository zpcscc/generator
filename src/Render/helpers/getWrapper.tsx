import type { SortingStrategy } from '@dnd-kit/sortable';
import {
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Fragment } from 'react';
import type { AnyObject, ComponentItemType, StructureItemType } from 'src/type';
import SortableContainer from '../SortableContainer';

type WrapperType = 'editor' | 'play' | 'component';

interface WrapperResult {
  Wrapper: React.FC<any>;
  wrapperProps?: AnyObject;
}

/**
 * @name 通过type,返回对应的包装容器
 * @param componentConfig
 * @returns
 */
const getWrapper = (
  type: WrapperType,
  structureItem?: StructureItemType,
  componentItem?: ComponentItemType,
): WrapperResult => {
  const { children } = structureItem || {};
  let strategy: SortingStrategy;
  const { props } = componentItem || {};

  switch (type) {
    case 'editor':
      strategy = verticalListSortingStrategy;
      // 需要根据容器组件的配置，设置不同的拖拽排序策略。垂直排序或水平排序。
      if (componentItem?.type === 'Space' && props?.direction === 'horizontal') {
        strategy = horizontalListSortingStrategy;
      }
      return {
        Wrapper: SortableContext,
        wrapperProps: { items: children, strategy },
      };
    case 'component':
      return { Wrapper: SortableContainer };
    default:
      return { Wrapper: Fragment };
  }
};

export default getWrapper;
