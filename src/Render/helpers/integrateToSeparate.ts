import type { ComponentItemType, ComponentStructureType } from '@dxsixpc/generator/type';

/**
 * @name 数据与布局结构分离
 * @param componentConfig
 * @returns
 */
const integrateToSeparate = (componentConfig: ComponentItemType[]) => {
  const ComponentItems: ComponentItemType[] = [];

  // 递归循环遍历json
  const loopComponents = (components: ComponentItemType[]): ComponentStructureType[] => {
    return components.map((component) => {
      const { name = '', children } = component || {};
      if (children) {
        ComponentItems.push({ ...component, children: undefined });
        return {
          name,
          children: loopComponents(children),
        };
      }
      ComponentItems.push({ ...component });
      return { name };
    });
  };

  return {
    ComponentStructure: loopComponents(componentConfig),
    ComponentItems,
  };
};

export default integrateToSeparate;
