import type { OptionsConfigType, OptionType } from '../../type';

// 选项配置类型
export interface CurrOptionType extends Omit<OptionType, 'id'> {
  // 选项的id
  id: string;
}

// 组件内的
export interface CurrOptionsConfigType
  extends Omit<OptionsConfigType, 'options'> {
  options: CurrOptionType[];
}
