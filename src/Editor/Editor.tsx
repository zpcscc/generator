export interface EditorProps {
  // 值改变时
  onValuesChange: () => void;
}

/**
 * @name 编辑器
 */
const Editor: React.FC<EditorProps> = (props) => {
  return <div>编辑器</div>;
};

export default Editor;
