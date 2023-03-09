import type { DragEndEvent } from '@dnd-kit/core';
import type { SetterOrUpdater } from 'recoil';
import type { ComponentStructureType } from 'src/type';
import formatComponentItems from './formatComponentItems';
import sortItems from './sortItems';

/**
 * @name 拖拽结束时
 * @param event
 * @param structureItems
 * @param setItems
 */
const onDragEnd = (
  { active, over }: DragEndEvent,
  setComponentItems: SetterOrUpdater<ComponentStructureType>,
) => {
  // 当前拖拽组件与所覆盖的组件不是同一个，则进行排序
  if (active.id !== over?.id && over?.id !== undefined) {
    setComponentItems(({ componentItems, structureItems }) =>
      formatComponentItems({
        componentItems,
        structureItems: sortItems(structureItems, active.id, over?.id),
      }),
    );
  } else {
    setComponentItems((componentItems) => formatComponentItems(componentItems));
  }
};

export default onDragEnd;
