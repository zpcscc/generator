import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import componentItemsState from '../../../atoms/componentStructureState';
import useModelData from './modalData';
import { ContentHeaderWrapper } from './Styled';
import type { ModelType } from './type';

// 中间区域画布头
const ContentHeader: React.FC = () => {
  const setComponentItems = useSetRecoilState(componentItemsState);

  const [modalType, setModalType] = useState<ModelType | null>(null);
  const modalDataMap = useModelData(setModalType);
  const modalData = modalType ? modalDataMap[modalType] : {};

  return (
    <ContentHeaderWrapper size={[8, 16]} wrap>
      <Button onClick={() => setModalType('previewModel')}>预览</Button>
      <Button danger onClick={() => setComponentItems({ componentItems: [], structureItems: [] })}>
        清空
      </Button>
      <Button onClick={() => setModalType('importModel')}>导入</Button>
      <Button type='primary' onClick={() => setModalType('exportModel')}>
        导出
      </Button>
      <Modal open={Boolean(modalType)} {...modalData} />
    </ContentHeaderWrapper>
  );
};

export default ContentHeader;
