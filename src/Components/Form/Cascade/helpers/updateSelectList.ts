import { isEmpty } from 'lodash';
import type { SelectListType, TreeDataType } from '../type';

// 获取options选项
const getOptions = (treeDataItem: TreeDataType[]) =>
  treeDataItem.map((item) => ({
    value: item.value,
    label: item.value,
    id: item.value,
  }));

/**
 * @name 根据选择的值，更新选择下拉列表
 * @param treeData 完整的树形数据
 * @param valueArr 用户选择的值
 */
const updateSelectList = (
  treeData: TreeDataType[],
  valueArr: string[],
  level: number,
): SelectListType[] => {
  const newSelectList: SelectListType[] = Array(level).fill({
    options: [],
  });

  // 设置第一级数据
  newSelectList[0] = {
    options: getOptions(treeData),
  };

  // 根据用户选择的值，设置后几级数据
  valueArr.forEach((item, index) => {
    const loopTree = (treeDataValue: TreeDataType[]) => {
      treeDataValue.forEach((treeDataItem) => {
        if (!isEmpty(treeDataItem.children) && index + 1 < level) {
          if (treeDataItem.value === item) {
            newSelectList[index + 1] = {
              options: getOptions(treeDataItem.children),
            };
          } else {
            loopTree(treeDataItem.children);
          }
        }
      });
    };
    loopTree(treeData);
  });
  return newSelectList;
};

export default updateSelectList;
