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
  const isInRoot = Boolean(structureItems.find((item) => item?.id === currentId));
  const { setNodeRef } = useDroppable({ id: 'root', disabled: isInRoot });
  return (
    <ContentLayoutWrapper>
      <ContentHeader />
      <ContentWrapper>
        <div ref={setNodeRef}>
          {componentItems?.length ? (
            <Render
              componentItems={componentItems}
              structureItems={structureItems}
              editorProps={{
                currentId,
                onSelect: (id) => setCurrent({ fieldConfig: getFieldConfig(id), currentId: id }),
                onDelete: (id) => {
                  setCurrent({ fieldConfig: undefined, currentId: undefined });
                  setComponentStructure((componentStructure) => deleteItem(componentStructure, id));
                },
                onCopy: (id) => {
                  const newId = uniqueId(`${id.split('-')[0]}-`);
                  setCurrent({ fieldConfig: getFieldConfig(id), currentId: newId });
                  setComponentStructure((componentStructure) =>
                    copyItem(componentStructure, id, newId),
                  );
                },
              }}
            />
          ) : (
            <div className='content-placeholder'>点击/拖拽左侧栏的组件进行添加</div>
          )}
        </div>
      </ContentWrapper>
    </ContentLayoutWrapper>
  );
};

export default Content;
