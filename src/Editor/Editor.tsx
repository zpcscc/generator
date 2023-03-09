import { RecoilRoot } from 'recoil';
import type { ComponentItemType, ComponentMapType } from 'src/type';
import Layout from './Layout';

export interface EditorProps {
  // 外部传入的自定义组件对象
  componentMap?: ComponentMapType;
  // 值改变时
  onChange: (componentItems: ComponentItemType[]) => void;
}

const Editor: React.FC<EditorProps> = (props) => {
  return (
    <RecoilRoot>
      <Layout {...props} />
    </RecoilRoot>
  );
};

export default Editor;
