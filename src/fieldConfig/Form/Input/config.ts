import type { ComponentItemType } from 'src/type';
import { labelSpaceConfig, placeholderConfig, showCountConfig } from '../../commonConfig';

// 输入框配置项
export const inputConfig = (): ComponentItemType[] => {
  return [labelSpaceConfig(), placeholderConfig(), showCountConfig()];
};
