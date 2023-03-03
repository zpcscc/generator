import type { ComponentItemsState, ComponentItemType, ComponentStructureType } from 'src/type';

/**
 * @name 数据与布局结构分离
 * @param componentConfig
 * @returns
 */
const integrateToSeparate = (componentConfig: ComponentItemType[]): ComponentItemsState => {
  const componentFlatItems: ComponentItemType[] = [];

  // 递归循环遍历json
  const loopComponents = (components: ComponentItemType[]): ComponentStructureType[] => {
    return components.map((component) => {
      const { id = '', children } = component || {};
      if (children) {
        componentFlatItems.push({ ...component, children: undefined });
        return {
          id,
          children: loopComponents(children),
        };
      }
      componentFlatItems.push({ ...component });
      return { id };
    });
  };

  return {
    componentStructure: loopComponents(componentConfig),
    componentFlatItems,
  };
};

export default integrateToSeparate;
