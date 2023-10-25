// 通用校验配置
import { type ComponentItemType } from 'src/type';

/**
 * @name 必填验证配置
 */
export const isRequiredConfig = (): ComponentItemType => ({
  id: 'required',
  label: '必填',
  type: 'Switch',
  tooltip: '设为必填后，必须填写该字段才能提交',
});

/**
 * @name 最小值配置
 */
export const minConfig = (): ComponentItemType => ({
  id: 'min',
  label: '最小值',
  type: 'InputNumber',
  tooltip: '用户输入的最小值不能超过此数值',
  props: { placeholder: '请输入最小值' },
});

/**
 * @name 最大值配置
 */
export const maxConfig = (): ComponentItemType => ({
  id: 'max',
  label: '最大值',
  type: 'InputNumber',
  tooltip: '用户输入的最大值不能超过此数字',
  props: { placeholder: '请输入最大值' },
});

/**
 * @name 精度配置
 */
export const precisionConfig = (): ComponentItemType => ({
  id: 'precision',
  label: '最多几位小数',
  type: 'InputNumber',
  props: { placeholder: '请输入小数位数' },
});
