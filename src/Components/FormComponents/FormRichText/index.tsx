import { useDebounceFn } from 'ahooks';
import type { DebounceOptions } from 'ahooks/lib/useDebounce/debounceOptions';
import type { BraftEditorProps, EditorState } from 'braft-editor';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import React, { useState } from 'react';
import { Wrapper } from './Styled';

export interface FormRichTextProps extends BraftEditorProps {
  // 防抖配置
  debounceOptions?: DebounceOptions;
  styled?: string;
}

/**
 * @name 富文本编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param debounceOptions 防抖配置 示例：{wait:100}
 * @link 其他参数详见 https://braft.margox.cn/
 */
const FormRichText: React.FC<FormRichTextProps> = (props) => {
  const { value, styled, onChange, debounceOptions, ...rest } = props;
  const [editorState, setEditorState] = useState<EditorState>(
    BraftEditor.createEditorState(value),
  );

  // 防抖处理，多次输入。最后一次结束后触发
  const { run: runChange } = useDebounceFn(
    (htmlContentValue) => onChange && onChange(htmlContentValue),
    debounceOptions,
  );

  // 在编辑器修改数据时触发
  const handleEditorChange = (editorStateValue: EditorState) => {
    setEditorState(editorStateValue);
    // 调用editorState.toHTML()来获取HTML格式的内容，保存html格式的数据
    const htmlContent = editorStateValue.toHTML();
    runChange?.(htmlContent);
  };

  return (
    <Wrapper className="my-component" styled={styled}>
      <BraftEditor
        language="zh"
        value={editorState}
        onChange={handleEditorChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormRichText;
