import type { UniqueIdentifier } from '@dnd-kit/core';
import { isEmpty } from 'lodash';
import type { StructureItemType } from 'src/type';

/**
 * @name 输入容器id，找到id所在的item
 * @param id
 * @param items
 * @returns item
 */
const findContainer = (
  id?: UniqueIdentifier,
  items?: StructureItemType[],
): StructureItemType | undefined => {
  if (!id || !items) return undefined;
  let structureItem;
  // 递归循环遍历数据
  const loopItems = (items) => {
    for (let i = 0; i < items.length; i++) {
      const currItem = items[i];
      if (items[i]?.id === id) {
        structureItem = currItem;
        break;
      } else if (!isEmpty(currItem?.children)) {
        loopItems(currItem.children);
      }
    }
  };
  loopItems(items);
  return structureItem || { id, children: [] };
};

export default findContainer;
