import { isEmpty } from 'lodash';
import type { ComponentItemType, ComponentStructureType, StructureItemType } from 'src/type';

/**
 * @name 传入组件的数据结构。格式化，同步组件与结构两者的数据并返回。
 * @param id 需要在内部组件的容器ID
 * @param items 需要添加的item
 * @returns items
 */
const formatItems = (
  componentItems: ComponentItemType[],
  // 完整的结构数据
  structureItems: StructureItemType[],
): ComponentStructureType => {
  // 以structureItems为基准，将componentItems里的多余数据删除；
  const newComponentItems: ComponentItemType[] = [];
  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]) => {
    return items
      .map((item) => {
        const currComponentItem = componentItems.find(
          (componentItem) => componentItem.id === item.id,
        );
        if (currComponentItem) newComponentItems.push(currComponentItem);
        return {
          ...item,
          children:
            item.children === undefined || isEmpty(item.children) ? null : loopItems(item.children),
        };
      })
      .filter(Boolean);
  };

  loopItems(structureItems);

  return {
    componentItems: newComponentItems,
    structureItems,
  };
};

export default formatItems;
