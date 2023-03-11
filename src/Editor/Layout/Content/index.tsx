import { useSortable } from '@dnd-kit/sortable';
import { useRecoilState, useSetRecoilState } from 'recoil';
import currentState from 'src/Editor/atoms/currentState';
import { Render } from 'src/Render';
import componentStructureState from '../../atoms/componentStructureState';
import { copyItem, deleteItem, getFieldConfig } from '../utils';
import ContentHeader from './ContentHeader';
import { ContentLayoutWrapper, ContentWrapper } from './Styled';

// 中间画布内容区域
const Content: React.FC = () => {
  const [{ componentItems, structureItems }, setComponentStructure] =
    useRecoilState(componentStructureState);
  const setCurrent = useSetRecoilState(currentState);
  const { setNodeRef } = useSortable({ id: 'Content' });

  return (
    <ContentLayoutWrapper>
      <ContentHeader />
      <ContentWrapper ref={setNodeRef}>
        {componentItems?.length ? (
          <Render
            type='editor'
            componentItems={componentItems}
            structureItems={structureItems}
            onSelect={(id) => setCurrent({ fieldConfig: getFieldConfig(id), currentId: id })}
            onDelete={(id) => {
              setCurrent({ fieldConfig: undefined, currentId: undefined });
              setComponentStructure((componentStructure) => deleteItem(id, componentStructure));
            }}
            onCopy={(id) => {
              setCurrent({ fieldConfig: undefined, currentId: undefined });
              setComponentStructure((componentStructure) => copyItem(id, componentStructure));
            }}
          />
        ) : (
          <div className='content-placeholder'>点击/拖拽左侧栏的组件进行添加</div>
        )}
      </ContentWrapper>
    </ContentLayoutWrapper>
  );
};

export default Content;
