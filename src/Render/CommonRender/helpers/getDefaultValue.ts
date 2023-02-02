import type { WidgetItemType } from 'src/types';
import integrateToSeparate from './integrateToSeparate';

// 获取组件里的默认值
const getDefaultValue = (widgetItemList: WidgetItemType[]) => {
  const { widgetItems } = integrateToSeparate(widgetItemList);
  const defaultValue: AnyObject = {};
  widgetItems?.forEach((widgetItem) => {
    const { name = '' } = widgetItem;
    if (widgetItem?.props?.optionsConfig) {
      defaultValue[name] = widgetItem.props?.optionsConfig?.defaultValue;
    }
  });
  return defaultValue;
};

export default getDefaultValue;
