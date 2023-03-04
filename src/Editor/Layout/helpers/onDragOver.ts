import type { DragEndEvent } from '@dnd-kit/core';
import type { StructureItemType } from 'src/type';
import findContainer from './findContainer';
import sortItems from './sortItems';

/**
 * @name 拖拽覆盖到某个组件时
 * @param param
 * @param items
 * @param setItems
 */
const onDragOver = (
  event: DragEndEvent,
  items: StructureItemType[],
  setItems: (items: StructureItemType[]) => void,
) => {
  const { active, over } = event;
  const overId = over?.id;
  const activeId = active?.id;
  // 若没有overId 或者
  if (overId === null || items?.find((item) => item.id === activeId)) {
    return false;
  }

  if (activeId !== overId && overId !== undefined) {
    setItems(sortItems(items, activeId, overId));
  }
  const overContainer = findContainer(overId, items);
  const activeContainer = findContainer(active.id, items);
  if (!overContainer || !activeContainer) {
    return;
  }
  // if (activeContainer !== overContainer) {
  // const activeItems = items[activeContainer];
  // const overItems = items[overContainer];
  // const overIndex = overItems.indexOf(overId);
  // const activeIndex = activeItems.indexOf(active.id);
  // let newIndex: number;
  // if (overId in items) {
  //   newIndex = overItems.length + 1;
  // } else {
  //   const isBelowOverItem =
  //     over &&
  //     active.rect.current.translated &&
  //     active.rect.current.translated.top > over.rect.top + over.rect.height;
  //   const modifier = isBelowOverItem ? 1 : 0;
  //   newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
  // }
  // const newItems = {
  //   ...items,
  //   [activeContainer]: items[activeContainer].filter(
  //     (item: UniqueIdentifier) => item !== active.id,
  //   ),
  //   [overContainer]: [
  //     ...items[overContainer].slice(0, newIndex),
  //     items[activeContainer][activeIndex],
  //     ...items[overContainer].slice(newIndex, items[overContainer].length),
  //   ],
  // };
  // setItems(newItems);
  // }

  return false;
};
export default onDragOver;
