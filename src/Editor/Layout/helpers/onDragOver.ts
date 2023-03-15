import type { DragEndEvent } from '@dnd-kit/core';
import type { SetterOrUpdater } from 'recoil';
import type {
  ComponentItemType,
  ComponentStructureType,
  FieldConfigType,
  StructureItemType,
} from 'src/type';
import { isContainer } from 'src/utils';
import {
  findContainerItem,
  findStructureItem,
  formatItems,
  getFieldConfig,
  updateStructureItem,
} from '../utils';

/**
 * @name 拖拽覆盖到某个组件时
 * @param param
 * @param items
 * @param setItems
 */
const onDragOver = (
  event: DragEndEvent,
  componentItems: ComponentItemType[],
  structureItems: StructureItemType[],
  setComponentStructure: SetterOrUpdater<ComponentStructureType>,
) => {
  const { active, over } = event;
  if (!over?.id) return;
  const activeId = String(active.id);
  const overId = String(over?.id);

  /**
   * 从左侧组件列表拖拽至中间画布,添加新元素到画布中。需同时满足以下条件
   * 1、画布组件列表中不存在over.id组件
   * 2、拖拽的元素覆盖到中间画布区域或者画布区域组件上
   */
  if (
    !componentItems.find((item) => item.id === active.id) &&
    (overId === 'Content' || componentItems.find((item) => item.id === overId))
  ) {
    console.log('添加');
    // 添加新元素到画布中
    const { componentItem }: FieldConfigType = getFieldConfig(String(active.id));
    setComponentStructure(({ componentItems, structureItems }) => ({
      componentItems: [...componentItems, { ...componentItem, id: activeId }],
      structureItems: [...structureItems, { id: activeId }],
    }));
    return;
  }

  // 当前选中元素的的item
  // 获取对应元素所在容器的item
  const activeContainerItem = findContainerItem(structureItems, activeId);
  // console.log('overId: ', overId);
  const overContainerItem = findContainerItem(structureItems, overId, isContainer(overId));
  console.log('overContainerItem: ', overContainerItem);
  // 没有找到容器，直接退出
  if (!activeContainerItem || !overContainerItem) return;

  // 两者容器id不同，则不在同一个容器中。需要调整位置
  if (activeContainerItem.id !== overContainerItem.id) {
    // 将当前拖拽的组件，放入所覆盖到的容器中

    const activeStructureItem = findStructureItem(structureItems, activeId);
    const overStructureItem = findStructureItem(structureItems, overId);
    if (!activeStructureItem || !overStructureItem) return;
    // const activeItems = activeContainerItem.children || [];
    const overItems = overContainerItem.children || [];
    const overIndex = overItems.findIndex((item) => item.id === overId);

    const newStructureItems = updateStructureItem(
      structureItems,
      activeId,
      overContainerItem.id,
      activeStructureItem,
      overIndex,
    );
    console.log('newStructureItems: ', newStructureItems);

    setComponentStructure(({ componentItems }) => formatItems(componentItems, newStructureItems));
  }

  // 若元素覆盖到容器上，且元素不在当前容器里，则添加
  // if (containerList.includes(overId.split('-')[0])) {
  // }

  return false;
};
export default onDragOver;
