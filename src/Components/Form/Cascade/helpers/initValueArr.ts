/**
 * @name 初始化value数组，确保长度正确，方便后续更改数据；
 * @param value 用户传入的数据
 * @param level 级联的层级
 * @returns
 */
const initValueArr = (value: string[], level: number): string[] => {
  let restArr: string[] = [];
  if (level >= value.length) {
    restArr = Array(level - value.length);
  }
  return [...value, ...restArr];
};

export default initValueArr;
