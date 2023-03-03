import { RecoilRoot } from 'recoil';
import type { ComponentItemType } from 'src/type';
import Content from './Content';
import LeftSider from './LeftSider';
import RightSider from './RightSider';
import { LayoutWrapper } from './Styled';

export interface EditorProps {
  // 值改变时
  onChange: (componentItems: ComponentItemType[]) => void;
}

const Editor: React.FC<EditorProps> = (props) => {
  return (
    <RecoilRoot>
      <LayoutWrapper>
        <LeftSider />
        <Content />
        <RightSider />
      </LayoutWrapper>
    </RecoilRoot>
  );
};

export default Editor;
