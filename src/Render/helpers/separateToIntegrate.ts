import type { ComponentItemType, ComponentStructureType } from 'src/type';

// 分离 -> 集成
const separateToIntegrate = (
  componentFlatItems: ComponentItemType[],
  componentStructure?: ComponentStructureType[],
) => {
  // 若没有单独写布局，则直接返回组件列表
  if (!componentStructure) return componentFlatItems || [];

  // 递归循环遍历json
  const loopComponents = (components: ComponentStructureType[]): ComponentItemType[] => {
    return components.map((component) =>
      component.children
        ? {
            ...componentFlatItems.find((item) => item.id === component.id),
            children: loopComponents(component.children),
          }
        : componentFlatItems.find((item) => item.id === component.id),
    ) as ComponentItemType[];
  };

  return loopComponents(componentStructure);
};

export default separateToIntegrate;
