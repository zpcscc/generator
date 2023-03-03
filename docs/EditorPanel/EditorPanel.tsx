import type { ComponentItemType } from '@dxsixpc/generator';
import { Editor } from '@dxsixpc/generator';
import { useEffect } from 'react';
import { EditorWrapper } from './Styled';

interface EditorProps {
  value: string;
}

// 编辑器
const EditorPanel: React.FC<EditorProps> = () => {
  const onChange = (pageData: ComponentItemType[]) => {
    console.log(pageData);
  };

  useEffect(() => {
    const sidebar = document.querySelectorAll('.dumi-default-sidebar')[0] as HTMLElement;
    sidebar.style.display = 'none';
    return () => {
      sidebar.style.display = 'block';
    };
  }, []);

  return (
    <EditorWrapper>
      <Editor onChange={onChange} />
    </EditorWrapper>
  );
};

export default EditorPanel;
