import type { EditorProps, OnChange } from '@monaco-editor/react';
import MonacoEditor, { loader } from '@monaco-editor/react';
import { useDebounceFn } from 'ahooks';
import type { DebounceOptions } from 'ahooks/lib/useDebounce/debounceOptions';
import React from 'react';
import { Wrapper } from './Styled';

loader.config({
  paths: {
    vs: 'https://unpkg.creatby.com/monaco-editor@0.28.1/min/vs',
  },
});

export interface FormMonacoEditorProps extends EditorProps {
  // 防抖配置
  debounceOptions?: DebounceOptions;
  styled?: string;
}

/**
 * @name 摩纳哥代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param debounceOptions 防抖配置 示例：{wait:100}
 * @param theme 主题样式
 * @param options 微软原版monaco-editor配置参数
 * @link options参数详见 https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html
 * @link 其他参数详见 https://github.com/suren-atoyan/monaco-react
 */
const FormMonacoEditor: React.FC<FormMonacoEditorProps> = (props) => {
  const {
    debounceOptions = { wait: 100 },
    value = '',
    defaultLanguage = 'javascript',
    theme = 'vs-dark',
    styled,
    onChange,
    ...rest
  } = props;

  // onChange封装
  const onEditorChange: OnChange = (editorValue, ev) => {
    onChange?.(editorValue, ev);
  };

  // 防抖操作
  const { run } = useDebounceFn(onEditorChange, debounceOptions);

  return (
    <Wrapper className="FormMonacoEditor" styled={styled}>
      <MonacoEditor
        defaultLanguage={defaultLanguage}
        theme={theme}
        defaultValue={value || ''}
        onChange={run}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormMonacoEditor;
