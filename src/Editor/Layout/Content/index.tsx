import { useDroppable } from '@dnd-kit/core';
import { uniqueId } from 'lodash';
import { useRecoilState } from 'recoil';
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
  const [{ currentId }, setCurrent] = useRecoilState(currentState);
  const isInContent = Boolean(componentItems.find((item) => item.id === currentId));
  const { setNodeRef } = useDroppable({ id: 'Content', disabled: isInContent });
  return (
    <ContentLayoutWrapper>
      <ContentHeader />
      <ContentWrapper ref={setNodeRef}>
        {componentItems?.length ? (
          <Render
            type='editor'
            componentItems={componentItems}
            structureItems={structureItems}
            currentId={currentId}
            onSelect={(id) => setCurrent({ fieldConfig: getFieldConfig(id), currentId: id })}
            onDelete={(id) => {
              setCurrent({ fieldConfig: undefined, currentId: undefined });
              setComponentStructure((componentStructure) => deleteItem(id, componentStructure));
            }}
            onCopy={(id) => {
              const newId = uniqueId(`${id.split('-')[0]}-`);
              setCurrent({ fieldConfig: getFieldConfig(id), currentId: newId });
              setComponentStructure((componentStructure) =>
                copyItem(id, componentStructure, newId),
              );
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
