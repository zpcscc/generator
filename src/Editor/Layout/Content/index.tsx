import { useSortable } from '@dnd-kit/sortable';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import currentState from 'src/Editor/atoms/currentState';
import { Render } from 'src/Render';
import componentStructureState from '../../atoms/componentStructureState';
import { getFieldConfig } from '../helpers';
import ContentHeader from './ContentHeader';
import { ContentLayoutWrapper, ContentWrapper } from './Styled';

// 中间区域画布
const Content: React.FC = () => {
  const { componentItems, structureItems } = useRecoilValue(componentStructureState);
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
            onSelect={(id) =>
              setCurrent({
                fieldConfig: getFieldConfig(id),
                currentId: id,
              })
            }
          />
        ) : (
          <div className='content-placeholder'>点击/拖拽左侧栏的组件进行添加</div>
        )}
      </ContentWrapper>
    </ContentLayoutWrapper>
  );
};

export default Content;
