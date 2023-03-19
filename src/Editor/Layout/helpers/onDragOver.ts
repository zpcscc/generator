import type { DragEndEvent } from '@dnd-kit/core';
import type { SetterOrUpdater } from 'recoil';
import type { ComponentStructureType } from 'src/type';
import { isContainer } from 'src/utils';
import { findContainerItem, findStructureItem, updateComponentStructure } from '../utils';

/**
 * @name 拖拽覆盖到某个组件时
 * @description onDragOver中，不负责组件的排序，只负责组件的添加，和跨容器组件的添加与删除
 * @param param
 * @param items
 * @param setItems
 */
const onDragOver = (
  event: DragEndEvent,
  componentStructure: ComponentStructureType,
  setComponentStructure: SetterOrUpdater<ComponentStructureType>,
) => {
  const { active, over } = event;
  if (!over?.id) return;
  const activeId = String(active.id);
  const overId = String(over?.id);
  const { structureItems } = componentStructure;

  // 获取当前元素所在容器的item
  const activeContainerItem = findContainerItem(structureItems, activeId);
  const overContainerItem = findContainerItem(structureItems, overId);
  // console.log('activeId: ', activeId, overId);
  // console.log('activeContainerItem: ', activeContainerItem, overContainerItem);
  // 没有找到所需要覆盖的容器，直接退出
  if (!overContainerItem) return;

  let activeStructureItem = findStructureItem(structureItems, activeId);
  const overStructureItem = findStructureItem(structureItems, overId);
  if (!overStructureItem) return componentStructure;
  // 找不到当前元素的结构数据，说明时新添加的元素。初始化当前元素数据
  if (!activeStructureItem) activeStructureItem = { id: activeId };
  const overContainerChildren = overContainerItem.children || [];
  const overIndex = overContainerChildren.findIndex((item) => item.id === overId);

  // 是否为同一元素
  const isSameItem = activeId === overId;
  // 是否是同一容器
  const isSameContainer = activeContainerItem?.id === overContainerItem.id;

  /**
   * 以下几种情况，满足其一，则触发数据更新
   * 1、两者不是同一元素，不在同一容器中。
   * 2、两者不是同一元素，在同一容器中。over元素也是容器，且active元素不在over容器中
   */
  if (
    // 两者不是同一元素
    !isSameItem &&
    // 两者不在同一个容器中
    (!isSameContainer ||
      // 若两者在同一个容器中，但over元素也是个容器
      (isSameContainer &&
        isContainer(overId) &&
        !overStructureItem.children?.find((item) => item.id === activeId)))
  ) {
    // 更新结构数据，将active在对应容器中添加与删除
    setComponentStructure(
      updateComponentStructure({
        componentStructure,
        deleteItemId: activeId,
        addContainerId: isContainer(overId) ? overId : overContainerItem.id,
        newStructureItem: activeStructureItem,
        structureIndex: overIndex === -1 ? overContainerChildren.length : overIndex,
      }),
    );
  }
  return false;
};
export default onDragOver;
