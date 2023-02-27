import type { OptionsConfigType } from '../../type';

// 级联数据类型；
export interface TreeDataType {
  value: string;
  children: TreeDataType[];
}

export type SelectListType = OptionsConfigType<'Radio'>;
