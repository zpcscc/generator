import React from 'react';
import type { ComponentItemType, ComponentMapType } from 'src/types';
import * as ContainerComponents from '../ContainerComponents';
import * as DisplayComponents from '../DisplayComponents';
import * as FormComponents from '../FormComponents';

// 组件库中的所有组件
export const ComponentMap = {
  ...FormComponents,
  ...DisplayComponents,
  ...ContainerComponents,
};

/**
 * @name 通过组件type获取对应的组件实例
 * @param ComponentType 组件类型
 * @param ComponentMap 外部传入的组件map
 * @returns
 */
export const getComponent = (
  componentType: ComponentItemType['type'],
  otherComponentMap?: ComponentMapType,
): React.FC<any> => {
  return Reflect.get({ ...ComponentMap, ...otherComponentMap }, componentType);
};

export default getComponent;
