import {
  type ComponentItemType,
  type ComponentStructureType,
  type StructureItemType,
} from 'src/type';

/**
 * @name 数据与布局结构分离
 * @param componentConfig
 * @returns
 */
const integrateToSeparate = (componentConfig: ComponentItemType[]): ComponentStructureType => {
  const componentItems: ComponentItemType[] = [];

  // 递归循环遍历json
  const loopComponents = (components: ComponentItemType[]): StructureItemType[] => {
    return components.map((component) => {
      const { id = '', children } = component || {};
      if (children) {
        componentItems.push({ ...component, children: undefined });
        return {
          id,
          children: loopComponents(children),
        };
      }
      componentItems.push({ ...component });
      return { id };
    });
  };

  return {
    structureItems: loopComponents(componentConfig),
    componentItems,
  };
};

export default integrateToSeparate;
