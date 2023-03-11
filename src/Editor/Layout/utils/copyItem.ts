import { isEmpty, uniqueId } from 'lodash';
import type { ComponentItemType, ComponentStructureType } from 'src/type';

/**
 * @name 输入id，复制此项
 * @param id
 * @param items
 * @returns item
 */
const copyItem = (
  id: string,
  componentStructure: ComponentStructureType,
): ComponentStructureType => {
  const { componentItems, structureItems } = componentStructure;
  const newId = uniqueId(`${id.split('-')[0]}-`);
  const newComponentItems = [...componentItems];

  // 递归循环遍历数据
  const loopItems = (items) => {
    return items.reduce((prev, curr) => {
      if (curr.id === id) {
        prev.push(curr, { ...curr, id: newId });
      } else {
        prev.push({
          id: curr.id,
          children: isEmpty(curr.children) ? null : loopItems(curr.children),
        });
      }
      return prev;
    }, []);
  };

  newComponentItems.splice(componentItems.findIndex((item) => item.id === id) + 1, 0, {
    ...componentItems.find((item) => item.id === id),
    id: newId,
  } as ComponentItemType);

  return {
    componentItems: newComponentItems,
    structureItems: loopItems(structureItems),
  };
};

export default copyItem;
