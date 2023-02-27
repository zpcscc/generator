import type { EditorProps, OnChange } from '@monaco-editor/react';
import Editor from '@monaco-editor/react';
import { useDebounceFn } from 'ahooks';
import type { DebounceOptions } from 'ahooks/lib/useDebounce/debounceOptions';
import { Wrapper } from './Styled';

export interface MonacoEditorProps extends EditorProps {
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
const MonacoEditor: React.FC<MonacoEditorProps> = (props) => {
  const {
    debounceOptions = { wait: 100 },
    value = '',
    language = 'javascript',
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
    <Wrapper className='MonacoEditor' styled={styled}>
      <Editor
        language={language}
        theme={theme}
        defaultValue={value || ''}
        onChange={run}
        {...rest}
      />
    </Wrapper>
  );
};

export default MonacoEditor;
