import type { ComponentItemType, ComponentMapType } from 'src/types';
import * as Container from '../Container';
import * as Display from '../Display';
import * as Form from '../Form';

// 组件库中的所有组件
export const ComponentMap = {
  ...Form,
  ...Display,
  ...Container,
};

/**
 * @name 通过组件type获取对应的组件实例
 * @param ComponentType 组件类型
 * @param ComponentMap 外部传入的组件map
 * @returns
 */
export const getComponent = (
  type: ComponentItemType['type'],
  otherComponentMap?: ComponentMapType,
): React.FC<any> => {
  return Reflect.get({ ...ComponentMap, ...otherComponentMap }, type);
};

export default getComponent;
