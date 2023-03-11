import type { DragEndEvent } from '@dnd-kit/core';
import type { SetterOrUpdater } from 'recoil';
import type { ComponentStructureType } from 'src/type';
import { sortItems } from '../utils';

/**
 * @name 拖拽结束时
 * @param event
 * @param structureItems
 * @param setItems
 */
const onDragEnd = (
  { active, over }: DragEndEvent,
  setComponentStructure: SetterOrUpdater<ComponentStructureType>,
) => {
  // 当前拖拽组件与所覆盖的组件不是同一个，则进行排序
  if (active.id !== over?.id && over?.id !== undefined) {
    setComponentStructure(({ componentItems, structureItems }) => ({
      componentItems,
      structureItems: sortItems(structureItems, active.id, over?.id),
    }));
  } else {
    // setComponentStructure((componentItems) => formatComponentItems(componentItems));
  }
};

export default onDragEnd;
