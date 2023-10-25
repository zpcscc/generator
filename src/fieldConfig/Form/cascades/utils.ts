import { type AnyObject } from 'src/type';
import { provinceCityAreaCascadeData } from './province-city-china';

// 数组转化成字符串，用于手动输入面板显示
const arr2str = (arr: string[][]) => {
  let str = '';
  if (Array.isArray(arr) && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.length) {
        str += arr[i].join(', ') + (i === arr.length - 1 ? '' : '\n');
      }
    }
  }
  return str;
};

// 字符串转化成数组，用于转换手动输入面板的字符串
const str2arr = (str: string) => {
  const resArr: string[][] = [];
  const arr = str.split('\n');
  for (const element of arr) {
    const line = element.trim();
    if (line !== '') {
      const cols = line.split(/[\t,，]/);
      const colArr: string[] = [];
      for (const col_ of cols) {
        const col = col_.trim();
        if (col !== '') colArr.push(col.replaceAll(/^“|^‘|^"|^'|"$|'$|”$|’$/g, ''));
      }
      if (colArr.length > 0) resArr.push(colArr);
    }
  }
  return resArr;
};

// 将组件配置项的值转为配置面板可以展示的格式
export const value2Panel = (initValue?: AnyObject): AnyObject => {
  if (!initValue) return {};
  const panelValue = { ...initValue };
  if (panelValue.sourceType === 'manualInput' && typeof Array.isArray(panelValue.cascadeData)) {
    // 若用户选择手工输入，且输入的是数组，则将数组转为级联数据格式
    panelValue.cascadeData = arr2str(panelValue.cascadeData);
  }

  return panelValue;
};

// 将配置面板的值转为组件可正确识别的格式或内容
export const panel2Value = (panelValue?: AnyObject): AnyObject => {
  if (!panelValue) return {};
  const newValue = { ...panelValue };
  if (typeof panelValue.cascadeData === 'string') {
    // 若用户选择手工输入，且输入的是字符串，则将字符串转为级联数据格式
    newValue.cascadeData = str2arr(panelValue.cascadeData);
  } else if (panelValue.sourceType === 'provinceCityArea') {
    // 若用户选择省市区，则直接将省市区数据存入级联数据
    newValue.cascadeData = provinceCityAreaCascadeData();
  }
  return newValue;
};
