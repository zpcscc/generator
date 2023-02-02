import { arrayMove } from '@dnd-kit/sortable';
import { uniqueId } from 'lodash';
import type { OptionsConfigType } from '../../type';
import type { CurrOptionsConfigType, CurrOptionType } from './type';

/**
 * @name 格式化配置，补全缺漏的值
 * @params optionsConfig 需要格式化的值
 * @return optionsConfig 格式化完成后的值
 */
export const formatOptionsConfig = (
  optionsConfig: OptionsConfigType,
): CurrOptionsConfigType => {
  const { type = 'Radio', defaultValue = '', options = [] } = optionsConfig;
  return {
    type,
    defaultValue,
    options: options.map((option) => ({
      ...option,
      id: option.id || uniqueId('op'),
      checked: typeof option.checked === 'boolean' ? option.checked : false,
    })),
  };
};

// 选项排序
export const sortOptions = (
  options: CurrOptionType[],
  activeId: string | number,
  overId: string | number,
) => {
  const oldIndex = options.findIndex((item) => item.id === activeId);
  const newIndex = options.findIndex((item) => item.id === overId);
  return arrayMove(options, oldIndex, newIndex) as CurrOptionType[];
};
