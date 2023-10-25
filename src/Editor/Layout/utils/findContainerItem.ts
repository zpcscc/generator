import { isEmpty } from 'lodash';
import { type StructureItemType } from 'src/type';

/**
 * @name 输入元素id，找到id所在所在的容器item
 * @param id
 * @param items
 * @returns item
 */
const findContainerItem = (
  structureItems?: StructureItemType[],
  id?: string,
): StructureItemType | undefined => {
  if (!id || !structureItems) return undefined;
  let currStructureItem: StructureItemType | undefined;
  if (id === 'root') {
    return { id: 'root', children: isEmpty(structureItems) ? undefined : structureItems };
  }
  // 递归循环遍历数据
  const loopItems = (structureItem?: StructureItemType) => {
    const { children } = structureItem || {};
    if (children) {
      for (let i = 0; i < children?.length; i++) {
        if (children?.[i]?.id === id) {
          currStructureItem = structureItem;
          break;
        } else if (!isEmpty(children?.[i]?.children)) {
          loopItems(children?.[i]);
        }
      }
    }
  };
  loopItems({ id: 'root', children: structureItems });
  return currStructureItem;
};

export default findContainerItem;
