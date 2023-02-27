import type { AnyObject } from '@dxsixpc/generator/type';
/**
 * @name 格式化参数， 只有指定的字段可以当做props传入组件
 * @param props
 * @returns
 */
const formatProps = (props: AnyObject) => {
  const newProps: AnyObject = {};
  // 需要传入组件的字段。这里的所有字段，都会被视为组件的props
  const includeField = ['picture'];
  Object.entries(props).forEach(([key, value]) => {
    if (includeField.includes(key)) {
      newProps[key] = value;
    }
  });
  return newProps;
};

export default formatProps;
