import { isEmpty } from 'lodash';
import type { StructureItemType } from 'src/type';

/**
 * @name 输入元素id，找到id所在所在的容器item
 * @param id
 * @param items
 * @returns item
 */
const findContainerItem = (
  structureItems?: StructureItemType[],
  id?: string,
  isContainer?: boolean,
): StructureItemType | undefined => {
  if (!id || !structureItems) return undefined;
  let currStructureItem;
  const rootStructureItem = { id: 'root', children: structureItems };
  // 递归循环遍历数据
  const loopItems = (structureItem: StructureItemType) => {
    const { children } = structureItem;
    if (children) {
      for (let i = 0; i < children?.length; i++) {
        if (children?.[i]?.id === id) {
          /**
           * 判断需要寻找的item是否是容器，
           * 1、若本身是容器，则返回本身的容器。
           * 2、本身不是容器，则返回包裹它的父容器。
           */
          currStructureItem = isContainer ? children?.[i] : structureItem;
          break;
        } else if (!isEmpty(children?.[i].children)) {
          loopItems(children?.[i]);
        }
      }
    }
  };
  loopItems(rootStructureItem);
  if (id === 'root') return rootStructureItem;
  return currStructureItem;
};

export default findContainerItem;
