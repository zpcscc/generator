import { atom } from 'recoil';
import type { FieldConfigType } from 'src/type';

/**
 * @name 排序配置信息
 */
const sortableState = atom<FieldConfigType>({
  key: 'fieldConfig',
  default: undefined,
});

export default sortableState;
