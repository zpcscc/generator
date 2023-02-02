import type { SelectProps } from 'antd/lib/select';
import React, { useEffect, useState } from 'react';
import type { FormSelectProps } from '../FormSelect';
import FormSelect from '../FormSelect';
import type { FormTextAreaProps } from '../FormTextArea';
import FormTextArea from '../FormTextArea';
import { Wrapper } from './Styled';
import type { SelectListType } from './type';
import { arr2Tree, initValueArr, updateSelectList } from './utils';

export interface FormCascadeProps
  extends Omit<SelectProps<string>, 'onChange' | 'value'> {
  value: string[];
  cascadeData: string[][];
  styled?: string;
  level?: number;
  FormSelectOptions?: Omit<FormSelectProps, 'onChange' | 'optionsConfig'>;
  FormTextAreaOptions?: Omit<FormTextAreaProps, 'onChange'>;
  showTextArea?: boolean;
  placeholders?: string[];
  onChange?: (value: string[]) => void;
}

/**
 * @name 级联组件
 * @param value 每个级联选中的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param level 级联层级
 * @param placeholder 级联输入框占位符
 * @param showTextArea 显示自定义文本框
 * @param FormSelectOptions 自定义下拉框的配置项
 * @param FormTextAreaOptions 自定义文本框的配置项
 * @param cascadeData 外部输入的级联选项数据
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const FormCascade: React.FC<FormCascadeProps> = (props) => {
  const {
    value = [],
    cascadeData = [],
    level = 3,
    styled,
    showTextArea = false,
    FormSelectOptions = {},
    FormTextAreaOptions = {},
    placeholders = [],
    onChange,
  } = props;

  const treeData = arr2Tree(cascadeData);
  const [valueArr, setValueArr] = useState<string[]>(
    initValueArr(value, showTextArea ? level + 1 : level),
  );
  const [textValue, setTextValue] = useState<string>(valueArr?.[level]);
  const [selectList, setSelectList] = useState<SelectListType[]>(
    updateSelectList(treeData, [], level),
  );
  // 当用户完成级联的选择后，再允许用户填写详细地址
  // const disabledFormTextArea = !(valueArr.length >= level);

  const onSelectChange = (selectValue: string, index: number) => {
    let newValueArr: string[] = valueArr;
    if (showTextArea && index === level) {
      valueArr[index] = selectValue;
      newValueArr = valueArr;
      setTextValue(selectValue);
    } else {
      newValueArr = [...valueArr.slice(0, index), selectValue];
      newValueArr[level] = textValue;
      setSelectList(updateSelectList(treeData, newValueArr, level));
    }
    setValueArr(newValueArr);
    onChange?.(newValueArr);
  };

  useEffect(() => {
    setSelectList(updateSelectList(treeData, [], level));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  return (
    <Wrapper styled={styled}>
      {selectList?.map((selectItem, index) => (
        <FormSelect
          key={index}
          value={valueArr?.[index]}
          placeholder={placeholders?.[index] ?? '请选择...'}
          optionsConfig={selectItem}
          onChange={(selectValue) => onSelectChange(selectValue, index)}
          style={{
            marginBottom: `${
              index === selectList.length - 1 && !showTextArea ? 0 : 20
            }px`,
          }}
          {...FormSelectOptions}
        />
      ))}
      {showTextArea && (
        <FormTextArea
          defaultValue={textValue}
          placeholder={placeholders?.[level] ?? '请输入...'}
          onChange={(textAreaValue) => onSelectChange(textAreaValue, level)}
          // disabled={disabledFormTextArea}
          {...FormTextAreaOptions}
        />
      )}
    </Wrapper>
  );
};

export default FormCascade;
