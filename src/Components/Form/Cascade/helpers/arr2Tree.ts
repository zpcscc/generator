import type { TreeDataType } from '../type';

/**
 * @name  二维数组转为树形结构
 * @param arr 二维数组
 * @returns
 */
const arr2Tree = (arr: string[][]) => {
  if (!Array.isArray(arr)) return [];
  const loopTree = (curr: string[], pre: TreeDataType[]) => {
    if (!Array.isArray(curr) || curr.length === 0) {
      return pre;
    }
    const [first, ...other] = curr;
    // 在树状数据中，找当前对应的数据
    const fIndex = pre.findIndex((item) => typeof item === 'object' && item.value === first);
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

export default arr2Tree;
