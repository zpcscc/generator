// 这这里对每个组件进行统一配置
import type { OptionsConfigType } from '@dxsixpc/components';
import type { ComponentItemType } from 'src/type';

/**
 * @name 标题配置
 */
export const labelConfig = (): ComponentItemType => ({
  id: 'label',
  label: '标题',
  type: 'Input',
  rules: [{ required: true, message: '不能为空' }],
  props: { placeholder: '请输入标题' },
});

/**
 * @name 显示标题配置
 */
export const showLabelConfig = (): ComponentItemType => ({
  id: 'showLabel',
  type: 'Checkbox',
  label: '显示标题',
  styled: { width: '70px' },
});

/**
 * @name 标题配置
 */
export const labelSpaceConfig = (): ComponentItemType => ({
  id: 'LabelSpace',
  type: 'Space',
  children: [labelConfig(), showLabelConfig()],
});

/**
 * @name 占位符配置
 */
export const placeholderConfig = (): ComponentItemType => ({
  id: 'placeholder',
  label: '占位符',
  type: 'Input',
  props: { placeholder: '请输入占位符' },
});

/**
 * @name 单选的选项配置
 */
export const radioOptionsConfig = (): ComponentItemType => ({
  id: 'optionsConfig',
  label: '选项',
  type: 'Options',
  props: {
    placeholder: '请选择',
    optionsConfig: {
      type: 'Radio',
      options: [
        { label: '选项1', value: '选项1' },
        { label: '选项2', value: '选项2' },
        { label: '选项3', value: '选项3' },
      ],
    } as OptionsConfigType<'Radio'>,
  },
});

/**
 * @name 多选框的选项配置
 */
export const checkboxOptionsConfig = (): ComponentItemType => ({
  id: 'optionsConfig',
  label: '选项',
  type: 'Options',
  props: {
    placeholder: '请选择',
    optionsConfig: {
      type: 'Checkbox',
      options: [
        { label: '选项1', value: '选项1' },
        { label: '选项2', value: '选项2' },
        { label: '选项3', value: '选项3' },
      ],
    } as OptionsConfigType<'Checkbox'>,
  },
});

/**
 * @name 是否实时显示字数
 */
export const showCountConfig = (): ComponentItemType => ({
  id: 'showCount',
  label: '显示字数',
  type: 'Switch',
  tooltip: '在输入时，实时显示输入的字数',
});
