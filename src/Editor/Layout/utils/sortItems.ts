import { arrayMove } from '@dnd-kit/sortable';
import { type StructureItemType } from 'src/type';

/**
 * @name 项目排序
 * @param items 选项列表
 * @param activeId 选中的id
 * @param overId 覆盖的id
 * @returns
 */
const sortItems = (
  items: StructureItemType[],
  activeId: string | number,
  overId: string | number,
) => {
  const oldIndex = items?.findIndex((item) => item?.id === activeId);
  const newIndex = items?.findIndex((item) => item?.id === overId);
  return arrayMove(items, oldIndex, newIndex);
};

export default sortItems;
