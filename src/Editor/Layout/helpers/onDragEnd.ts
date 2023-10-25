import { type DragEndEvent } from '@dnd-kit/core';
import { type SetterOrUpdater } from 'recoil';
import { type ComponentStructureType } from 'src/type';
import { findContainerItem, sortStructureItems } from '../utils';

/**
 * @name 拖拽结束时
 * @param event
 * @param structureItems
 * @param setItems
 */
const onDragEnd = (
  event: DragEndEvent,
  componentStructure: ComponentStructureType,
  setComponentStructure: SetterOrUpdater<ComponentStructureType>,
) => {
  const { active, over } = event;
  if (!over?.id) return;
  const activeId = String(active.id);
  const overId = String(over?.id);
  const { structureItems } = componentStructure;

  const activeContainerItem = findContainerItem(structureItems, activeId);
  const overContainerItem = findContainerItem(structureItems, overId);

  // 两者id不相等，但容器相等。说明需要的是在同一容器下的排序操作
  if (activeId !== overId && activeContainerItem?.id === overContainerItem?.id) {
    // 当前拖拽组件与所覆盖的组件不是同一个，则进行排序
    setComponentStructure(({ componentItems, structureItems }) => ({
      componentItems,
      structureItems: sortStructureItems(structureItems, activeId, overId, activeContainerItem?.id),
    }));
  }
};

export default onDragEnd;
