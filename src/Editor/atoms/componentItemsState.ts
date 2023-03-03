import { atom } from 'recoil';
import type { ComponentItemsState } from 'src/type';

/**
 * @name 当前画布上的组件数据
 */
const componentItemsState = atom<ComponentItemsState>({
  key: 'componentItems',
  default: {
    componentFlatItems: [],
    componentStructure: [],
  },
});

export default componentItemsState;
