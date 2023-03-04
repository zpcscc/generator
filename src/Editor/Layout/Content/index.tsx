import { useRecoilValue } from 'recoil';
import { Render } from 'src/Render';
import componentItemsState from '../../atoms/componentStructureState';
import ContentHeader from './ContentHeader';
import { ContentLayoutWrapper, ContentWrapper } from './Styled';

// 中间区域画布
const Content: React.FC = () => {
  const { componentItems, structureItems } = useRecoilValue(componentItemsState);

  return (
    <ContentLayoutWrapper>
      <ContentHeader />
      <ContentWrapper>
        {componentItems?.length ? (
          <Render type='editor' componentItems={componentItems} structureItems={structureItems} />
        ) : (
          <div className='content-placeholder'>点击/拖拽左侧栏的组件进行添加</div>
        )}
      </ContentWrapper>
    </ContentLayoutWrapper>
  );
};

export default Content;
