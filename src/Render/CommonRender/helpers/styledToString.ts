import type { StyledType } from '@dxsixpc/generator/type';
import { isObject } from 'lodash';

// 循环遍历styled对象，转为string
const loopStyled = (styledObj: StyledType): string => {
  let returnValue = '';
  Object.entries(styledObj).forEach(([key, value]) => {
    let styledValue = '';
    if (isObject(styledObj[key])) {
      styledValue = loopStyled(styledObj[key] as StyledType);
      returnValue += `${key}${styledValue}`;
    } else {
      styledValue = `${value};`;
      returnValue += `${key}:${styledValue}`;
    }
  });
  return `{${returnValue}}`;
};

/**
 * @name 将对象styled转为css-in-js可以运行的字符串
 * @param styled  样式对象 key为css选择器，value为css
 * @returns
 */
const styledToString = (styled?: StyledType | string): string => {
  if (!styled) return '';
  if (typeof styled === 'string') return styled;
  return `&${loopStyled(styled)}`;
};

export default styledToString;
