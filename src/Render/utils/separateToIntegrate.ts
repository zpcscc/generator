import { type ComponentItemType, type StructureItemType } from 'src/type';

// 分离 -> 集成
const separateToIntegrate = (
  componentItems: ComponentItemType[],
  structureItems?: StructureItemType[],
) => {
  // 若没有单独写布局，则直接返回组件列表
  if (!structureItems) return componentItems || [];

  // 递归循环遍历json
  const loopComponents = (components: StructureItemType[]): ComponentItemType[] => {
    return components.map((component) =>
      component?.children
        ? {
            ...componentItems.find((item) => item?.id === component?.id),
            children: loopComponents(component?.children),
          }
        : componentItems.find((item) => item?.id === component?.id),
    ) as ComponentItemType[];
  };

  return loopComponents(structureItems);
};

export default separateToIntegrate;
