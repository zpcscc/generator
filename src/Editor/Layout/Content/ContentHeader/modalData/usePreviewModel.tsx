import { type ModalProps } from 'antd';
import { useRecoilValue } from 'recoil';
import componentStructureState from 'src/Editor/atoms/componentStructureState';
import { Render } from 'src/Render';
import { type ModelType } from '../type';

// 预览弹出框
const usePreviewModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const { componentItems, structureItems } = useRecoilValue(componentStructureState);

  return {
    title: '预览',
    cancelText: '取消',
    okText: '确定',
    onCancel: () => setModalType(null),
    onOk: () => setModalType(null),
    children: (
      <div style={{ height: '500px', width: '100%', overflowY: 'scroll' }}>
        <Render componentItems={componentItems} structureItems={structureItems} />
      </div>
    ),
  };
};

export default usePreviewModel;
