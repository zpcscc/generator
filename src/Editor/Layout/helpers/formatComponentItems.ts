import { uniqueId } from 'lodash';
import type { ComponentStructureType, StructureItemType } from 'src/type';

/**
 * @name 格式化结构数据,主要是调整id等操作
 */
const formatComponentItems = ({
  componentItems,
  structureItems,
}: ComponentStructureType): ComponentStructureType => {
  const idObj = {};
  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]) => {
    return items.map((item) => {
      const isUniqueId = String(item?.id).includes('-');
      let newId = item?.id;
      if (!isUniqueId) {
        newId = uniqueId(`${item?.id || ''}-`);
        idObj[item?.id] = newId;
      }
      return {
        id: isUniqueId ? item?.id : newId,
        children: loopItems(item?.children || []),
      };
    });
  };
  const newStructureItems = loopItems(structureItems);
  const newComponentItems = componentItems.map((item) => ({
    ...item,
    id: idObj[item?.id] || item?.id,
  }));
  return {
    componentItems: newComponentItems,
    structureItems: newStructureItems,
  };
};

export default formatComponentItems;
