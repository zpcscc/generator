import { isEmpty } from 'lodash';
import type { ComponentItemType, OnEventChangeType, StructureItemType } from 'src/type';
import { getComponentItem } from '../utils';
import componentRender from './componentRender';
import containerRender from './containerRender';
import type { BaseRenderType } from './type';

export interface RenderItemProps extends BaseRenderType {
  componentItems: ComponentItemType[];
  structureItem?: StructureItemType;
  onEventChange?: OnEventChangeType;
  currentId?: string;
}

const renderItem = (props: RenderItemProps) => {
  const {
    componentItems,
    structureItem,
    defaultValue,
    componentMap,
    type,
    onEventChange,
    currentId,
  } = props;
  const { id = '', children } = structureItem || {};
  const componentItem = getComponentItem(componentItems, id);
  return !isEmpty(children)
    ? containerRender({
        componentItem,
        componentItems,
        structureItem,
        componentMap,
        defaultValue,
        type,
        onEventChange,
        currentId,
      })
    : componentRender({ componentItem, componentMap, defaultValue, type });
};

export default renderItem;
