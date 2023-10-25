import { atom } from 'recoil';
import { type ComponentStructureType } from 'src/type';

/**
 * @name 当前画布上的组件数据
 */
const componentStructureState = atom<ComponentStructureType>({
  key: 'structureItems',
  default: {
    componentItems: [],
    structureItems: [],
  },
});

export default componentStructureState;
