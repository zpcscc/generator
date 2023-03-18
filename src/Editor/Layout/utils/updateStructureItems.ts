import { cloneDeep, isEmpty } from 'lodash';
import type { StructureItemType } from 'src/type';

/**
 * @name 输入id，删除此项structure
 * @param id 需要在内部组件的容器ID
 * @param items 需要添加的item
 * @returns items
 */
const updateStructureItem = (
  // 完整的结构数据
  structureItems: StructureItemType[],
  // 需要被删除的id
  deleteItemId: string,
  // 需要被添加子元素的容器id
  addContainerId: string,
  // 需要添加的新内容
  newItem: StructureItemType,
  // 新内容需要添加的位置索引
  index: number,
): StructureItemType[] => {
  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]) => {
    return items
      .map((item) => {
        if (item.id === deleteItemId) return null;
        if (item.id === addContainerId) {
          const children = cloneDeep(item.children) || [];
          children.splice(index, 0, newItem);
          return { ...item, children };
        }
        return {
          ...item,
          children:
            item.children === undefined || isEmpty(item.children) ? null : loopItems(item.children),
        };
      })
      .filter(Boolean);
  };

  const newStructureItems = cloneDeep(structureItems) || [];
  if (addContainerId === 'root') {
    newStructureItems.splice(index, 0, newItem);
  }
  return loopItems(newStructureItems);
};

export default updateStructureItem;
