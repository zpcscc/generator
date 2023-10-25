import { isEmpty } from 'lodash';
import { type StructureItemType } from 'src/type';
import sortItems from './sortItems';

/**
 * @name 对structureItems进行排序
 * @param id 需要在内部组件的容器ID
 * @param items 需要添加的item
 * @returns items
 */
const sortStructureItems = (
  // 完整的结构数据
  structureItems: StructureItemType[],
  activeId: string,
  overId: string,
  // 需要排序的容器id
  containerId?: string,
): StructureItemType[] => {
  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]) => {
    return items.map((item) => {
      if (item.id === containerId) {
        return { ...item, children: sortItems(item.children || [], activeId, overId) };
      }
      return {
        ...item,
        children:
          item.children === undefined || isEmpty(item.children) ? null : loopItems(item.children),
      };
    });
  };

  if (!containerId || containerId === 'root') {
    return sortItems(structureItems || [], activeId, overId);
  }
  return loopItems(structureItems);
};

export default sortStructureItems;
