import type { DragEndEvent } from '@dnd-kit/core';
import type { SetterOrUpdater } from 'recoil';
import type { ComponentItemType, ComponentStructureType, StructureItemType } from 'src/type';
import { findContainerItem, sortStructureItems } from '../utils';

/**
 * @name 拖拽结束时
 * @param event
 * @param structureItems
 * @param setItems
 */
const onDragEnd = (
  event: DragEndEvent,
  componentItems: ComponentItemType[],
  structureItems: StructureItemType[],
  setComponentStructure: SetterOrUpdater<ComponentStructureType>,
) => {
  const { active, over } = event;
  if (!over?.id) return;
  const activeId = String(active.id);
  const overId = String(over?.id);

  const activeContainerItem = findContainerItem(structureItems, activeId);
  const overContainerItem = findContainerItem(structureItems, overId);
  // 没有找到容器，直接退出
  if (!activeContainerItem || !overContainerItem) return;

  // 两者id不相等，但容器相等。说明需要的是在同一容器下的排序操作
  if (activeId !== overId && activeContainerItem.id === overContainerItem.id) {
    // 当前拖拽组件与所覆盖的组件不是同一个，则进行排序
    setComponentStructure(({ componentItems, structureItems }) => ({
      componentItems,
      structureItems: sortStructureItems(structureItems, activeContainerItem.id, activeId, overId),
    }));
  }

  // 两者容器id不同，则不在同一个容器中。需要调整位置
  // if (activeContainerItem.id !== overContainerItem.id) {}
};

export default onDragEnd;
