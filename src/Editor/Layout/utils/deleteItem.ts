import { isEmpty } from 'lodash';
import { type ComponentStructureType, type StructureItemType } from 'src/type';
import formatItems from './formatItems';

/**
 * @name 输入id，删除此项
 * @param id
 * @param items
 * @returns item
 */
const deleteItem = (
  componentStructure: ComponentStructureType,
  id: string,
): ComponentStructureType => {
  const { componentItems, structureItems } = componentStructure;
  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]) => {
    return items
      .map((item) =>
        item.id === id
          ? null
          : {
              id: item.id,
              children:
                item.children === undefined || isEmpty(item.children)
                  ? null
                  : loopItems(item.children),
            },
      )
      .filter(Boolean);
  };

  return formatItems(
    componentItems.filter((item) => item.id !== id),
    loopItems(structureItems),
  );
};

export default deleteItem;
