import type { UniqueIdentifier } from '@dnd-kit/core';
import { isEmpty } from 'lodash';
import type { ComponentStructureType } from 'src/type';

/**
 * @name 输入id，删除此项
 * @param id
 * @param items
 * @returns item
 */
const deleteItem = (
  id: UniqueIdentifier,
  componentStructure: ComponentStructureType,
): ComponentStructureType => {
  const { componentItems, structureItems } = componentStructure;
  // 递归循环遍历数据
  const loopItems = (items) => {
    return items
      .map((item) =>
        item.id === id
          ? null
          : {
              id: item.id,
              children: isEmpty(item.children) ? null : loopItems(item.children),
            },
      )
      .filter(Boolean);
  };

  return {
    componentItems: componentItems.filter((item) => item.id !== id),
    structureItems: loopItems(structureItems),
  };
};

export default deleteItem;
