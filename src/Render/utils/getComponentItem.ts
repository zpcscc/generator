/* eslint-disable import/namespace */
import * as fieldMap from 'src/fieldConfig';
import type { ComponentItemType } from 'src/type';

/**
 * @name 通过id，找到对应的componentItem
 * @param componentConfig
 * @returns
 */
const getComponentItem = (
  componentItems: ComponentItemType[],
  id: string,
): ComponentItemType | undefined => {
  return componentItems.find((item) => item.id === id) || fieldMap[id.split('-')[0]]?.componentItem;
};

export default getComponentItem;
