import { useRecoilValue } from 'recoil';
import { Render } from 'src/Render';
import componentItemsState from '../atoms/componentItemsState';
import ContentHeader from './ContentHeader';
import { ContentLayoutWrapper, ContentWrapper } from './Styled';

// 中间区域画布
const Content: React.FC = () => {
  const { componentFlatItems, componentStructure } = useRecoilValue(componentItemsState);

  return (
    <ContentLayoutWrapper>
      <ContentHeader />
      <ContentWrapper>
        {componentFlatItems?.length ? (
          <Render componentItems={componentFlatItems} componentStructure={componentStructure} />
        ) : (
          <div className='content-placeholder'>点击/拖拽左侧栏的组件进行添加</div>
        )}
      </ContentWrapper>
    </ContentLayoutWrapper>
  );
};

export default Content;
