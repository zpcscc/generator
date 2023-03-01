import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Wrapper } from './Styled';

export interface SimpleCodeEditorProps {
  value?: string;
  // 代码语言：https://prismjs.com/#supported-languages
  language?: string | 'javascript' | 'typescript' | 'css' | 'json';
  onChange?: (value: string) => void;
  styled?: string;
}

/**
 * @name 简易代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param language 需要语法高亮的语言
 * @param styled 自定义样式 示例：styled：`width:'100%'`
 * @link 其他参数详见 https://www.npmjs.com/package/react-simple-code-editor
 */
const SimpleCodeEditor: React.FC<SimpleCodeEditorProps> = (props) => {
  const {
    value = '',
    language = 'javascript',
    onChange = (value) => console.log(value),
    styled,
    ...rest
  } = props;
  const [loadedLanguage, setLoadedLanguage] = useState<boolean>(false);

  // 加载语言
  useEffect(() => {
    if (Object.keys(Prism.languages).includes(language)) {
      setLoadedLanguage(true);
    } else {
      import(`prismjs/components/prism-${language}`).then(() => setLoadedLanguage(true));
    }
  }, [language]);

  return (
    <Wrapper styled={styled}>
      {loadedLanguage && (
        <Editor
          value={value}
          onValueChange={onChange}
          highlight={(value) => Prism.highlight(value, Prism.languages[language])}
          padding={10}
          {...rest}
        />
      )}
    </Wrapper>
  );
};

export default SimpleCodeEditor;
