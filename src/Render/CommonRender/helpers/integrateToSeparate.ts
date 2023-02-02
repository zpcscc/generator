import type { WidgetItemType, WidgetStructureType } from 'src/types';

/**
 * @name 数据与布局结构分离
 * @param componentConfig
 * @returns
 */
const integrateToSeparate = (componentConfig: WidgetItemType[]) => {
  const widgetItems: WidgetItemType[] = [];

  // 递归循环遍历json
  const loopComponents = (
    components: WidgetItemType[],
  ): WidgetStructureType[] => {
    return components.map((component) => {
      const { name = '', children } = component || {};
      if (children) {
        widgetItems.push({ ...component, children: undefined });
        return {
          name: name,
          children: loopComponents(children),
        };
      }
      widgetItems.push({ ...component });
      return { name: name };
    });
  };

  return {
    widgetStructure: loopComponents(componentConfig),
    widgetItems,
  };
};

export default integrateToSeparate;
