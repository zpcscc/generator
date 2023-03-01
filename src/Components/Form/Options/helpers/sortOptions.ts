import { arrayMove } from '@dnd-kit/sortable';
import type { CurrOptionType } from '../type';

/**
 * @name 选项排序
 * @param options 选项列表
 * @param activeId 选中的id
 * @param overId 覆盖的id
 * @returns
 */
const sortOptions = (
  options: CurrOptionType[],
  activeId: string | number,
  overId: string | number,
) => {
  const oldIndex = options.findIndex((item) => item.id === activeId);
  const newIndex = options.findIndex((item) => item.id === overId);
  return arrayMove(options, oldIndex, newIndex);
};

export default sortOptions;
