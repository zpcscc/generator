import { atom } from 'recoil';
import type { FieldConfigType } from 'src/type';

/**
 * @name 当前选中的组件默认配置信息
 */
const fieldConfigState = atom<FieldConfigType>({
  key: 'fieldConfig',
  default: undefined,
});

export default fieldConfigState;
