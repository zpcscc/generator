import type { DragEndEvent } from '@dnd-kit/core';
import type { StructureItemType } from 'src/type';
import sortItems from './sortItems';

/**
 * @name 拖拽结束时
 * @param event
 * @param structureItems
 * @param setItems
 */
const onDragEnd = (
  event: DragEndEvent,
  structureItems: StructureItemType[],
  setItems: (items: StructureItemType[]) => void,
) => {
  console.log('dnd-event: ', event);
  const { active, over } = event;
  if (active.id !== over?.id && over?.id !== undefined) {
    setItems(sortItems(structureItems, active.id, over?.id));
  }
};

export default onDragEnd;
