import { isEmpty } from 'lodash';
import type { SelectListType, TreeDataType } from './type';

// 初始化value数组，确保长度正确，方便后续更改数据；
export const initValueArr = (value: string[], level: number) => {
  let restArr = [];
  if (level >= value.length) {
    restArr = Array(level - value.length);
  }
  return [...value, ...restArr];
};

/**
 * @name  二维数组转为树形结构
 * @param arr 二维数组
 * @returns
 */
export const arr2Tree = (arr: string[][]) => {
  if (!Array.isArray(arr)) return [];
  const loopTree = (curr: string[], pre: TreeDataType[]) => {
    if (!Array.isArray(curr) || curr.length === 0) {
      return pre;
    }
    const [first, ...other] = curr;
    // 在树状数据中，找当前对应的数据
    const fIndex = pre.findIndex(
      (item) => typeof item === 'object' && item.value === first,
    );
    if (fIndex > -1) {
      // 找到对应的数据，判断是否需要继续递归
      const { children = [], ...rest } = pre[fIndex];
      // 若还有其他数据，则继续往下递归
      if (other.length > 0) {
        pre[fIndex] = { ...rest, children: loopTree(other, children) };
      }
    } else {
      // 没有找到对应的数据，则新添加数据
      const childObj = {
        children: other.length > 0 ? loopTree(other, []) : [],
      };
      pre.push({ value: first, ...childObj });
    }
    return pre;
  };
  return arr.reduce((pre, curr) => {
    return loopTree(curr, pre);
  }, [] as TreeDataType[]);
};

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
export const updateSelectList = (
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
