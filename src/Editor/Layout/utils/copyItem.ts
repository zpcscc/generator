import { isEmpty, uniqueId } from 'lodash';
import {
  type ComponentItemType,
  type ComponentStructureType,
  type StructureItemType,
} from 'src/type';

/**
 * @name 输入id，复制此项
 * @param id
 * @param items
 * @returns item
 */
const copyItem = (
  componentStructure: ComponentStructureType,
  id: string,
  newId?: string,
): ComponentStructureType => {
  const { componentItems, structureItems } = componentStructure;
  const newUnId = newId || uniqueId(`${id.split('-')[0]}-`);
  const newComponentItems = [...componentItems];

  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]) => {
    return items.reduce<StructureItemType[]>((prev, curr) => {
      if (curr.id === id) {
        prev.push(curr, { ...curr, id: newUnId });
      } else {
        prev.push({
          id: curr.id,
          children:
            curr.children === undefined || isEmpty(curr.children)
              ? undefined
              : loopItems(curr.children),
        });
      }
      return prev;
    }, []);
  };

  newComponentItems.splice(componentItems.findIndex((item) => item.id === id) + 1, 0, {
    ...componentItems.find((item) => item.id === id),
    id: newUnId,
  } as ComponentItemType);

  return {
    componentItems: newComponentItems,
    structureItems: loopItems(structureItems),
  };
};

export default copyItem;
