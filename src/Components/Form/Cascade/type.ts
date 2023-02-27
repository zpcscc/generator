import type { OptionsConfigType } from '@dxsixpc/generator';

// 级联数据类型；
export interface TreeDataType {
  value: string;
  children: TreeDataType[];
}

export type SelectListType = OptionsConfigType<'Radio'>;
