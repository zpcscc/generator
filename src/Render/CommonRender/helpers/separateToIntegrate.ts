import type { WidgetItemType, WidgetStructureType } from '@dxsixpc/generator/type';

// 分离 -> 集成
const separateToIntegrate = (
  widgetItems: WidgetItemType[],
  widgetStructure?: WidgetStructureType[],
) => {
  // 若没有单独写布局，则直接返回组件列表
  if (!widgetStructure) return widgetItems || [];

  // 递归循环遍历json
  const loopComponents = (components: WidgetStructureType[]): WidgetItemType[] => {
    return components.map((component) =>
      component.children
        ? {
            ...widgetItems.find((item) => item.name === component.name),
            children: loopComponents(component.children),
          }
        : widgetItems.find((item) => item.name === component.name),
    ) as WidgetItemType[];
  };

  return loopComponents(widgetStructure);
};

export default separateToIntegrate;
