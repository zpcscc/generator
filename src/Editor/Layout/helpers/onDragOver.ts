import type { DragEndEvent } from '@dnd-kit/core';
import type { SetterOrUpdater } from 'recoil';
import type { ComponentItemType, ComponentStructureType, FieldConfigType } from 'src/type';
import { getFieldConfig } from '../utils';

/**
 * @name 拖拽覆盖到某个组件时
 * @param param
 * @param items
 * @param setItems
 */
const onDragOver = (
  { active, over }: DragEndEvent,
  setComponentItems: SetterOrUpdater<ComponentStructureType>,
  componentItems: ComponentItemType[],
) => {
  /**
   * 从左侧组件列表拖拽至中间画布
   * 1、画布组件列表中不存在over.id组件
   */
  if (active?.id && !componentItems.find((item) => item.id === active.id)) {
    const fieldConfig: FieldConfigType = getFieldConfig(String(active.id));
    const { componentItem } = fieldConfig;
    const id = String(active?.id);
    setComponentItems(({ componentItems, structureItems }) => ({
      componentItems: [...componentItems, { ...componentItem, id }],
      structureItems: [...structureItems, { id }],
    }));
  }

  // if (activeId !== overId && overId !== undefined && over) {
  //   const isBelowOverItem =
  //     active.rect.current.translated &&
  //     active.rect.current.translated.top > over.rect.top + over.rect.height;
  //   console.log('active.rect.current.translated: ', active.rect.current.translated?.top);
  //   console.log('over.rect', over?.rect.top + over?.rect.height);
  //   const newItems = sortItems(items, activeId, overId);
  //   console.log('newItems: ', newItems);
  //   setItems(newItems);
  // }
  // const overContainer = findContainer(overId, items);
  // const activeContainer = findContainer(active.id, items);
  // if (!overContainer || !activeContainer) {
  //   return;
  // }
  // if (activeContainer?.id !== overContainer?.id && overId !== undefined) {
  //   setItems(sortItems(items, activeId, overId));
  //   const activeItems = items[activeContainer];
  //   const overItems = items[overContainer];
  //   const overIndex = overItems.indexOf(overId);
  //   const activeIndex = activeItems.indexOf(active.id);
  //   let newIndex: number;
  //   if (overId in items) {
  //     newIndex = overItems.length + 1;
  //   } else {
  //     const isBelowOverItem =
  //       over &&
  //       active.rect.current.translated &&
  //       active.rect.current.translated.top > over.rect.top + over.rect.height;
  //     const modifier = isBelowOverItem ? 1 : 0;
  //     newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
  //   }
  //   const newItems = {
  //     ...items,
  //     [activeContainer]: items[activeContainer].filter(
  //       (item: UniqueIdentifier) => item !== active.id,
  //     ),
  //     [overContainer]: [
  //       ...items[overContainer].slice(0, newIndex),
  //       items[activeContainer][activeIndex],
  //       ...items[overContainer].slice(newIndex, items[overContainer].length),
  //     ],
  //   };
  // }

  return false;
};
export default onDragOver;
