import type { ComponentItemType, ComponentStructureType } from '@dxsixpc/generator/type';

// 分离 -> 集成
const separateToIntegrate = (
  ComponentItems: ComponentItemType[],
  ComponentStructure?: ComponentStructureType[],
) => {
  // 若没有单独写布局，则直接返回组件列表
  if (!ComponentStructure) return ComponentItems || [];

  // 递归循环遍历json
  const loopComponents = (components: ComponentStructureType[]): ComponentItemType[] => {
    return components.map((component) =>
      component.children
        ? {
            ...ComponentItems.find((item) => item.name === component.name),
            children: loopComponents(component.children),
          }
        : ComponentItems.find((item) => item.name === component.name),
    ) as ComponentItemType[];
  };

  return loopComponents(ComponentStructure);
};

export default separateToIntegrate;
