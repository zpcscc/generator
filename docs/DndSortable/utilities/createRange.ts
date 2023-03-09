const defaultInitializer = (index: number) => index;

/**
 * @name 创建指定范围内的数据
 * @param length
 * @param initializer
 * @returns
 */
const createRange = <T = number>(
  length: number,
  initializer: (index: number) => any = defaultInitializer,
): T[] => {
  return [...new Array(length)].map((_, index) => initializer(index));
};

export default createRange;
