import { separateToIntegrate, SimpleCodeEditor } from '@dxsixpc/generator';
import { dataToString } from '@dxsixpc/utils';
import type { ModalProps } from 'antd';
import { Button, message, Space } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRecoilValue } from 'recoil';
import componentItemsState from 'src/Editor/atoms/componentItemsState';
import type { ModelType } from '../type';

// 导出弹出框
const useExportModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const { componentFlatItems, componentStructure } = useRecoilValue(componentItemsState);
  const componentItems = separateToIntegrate(componentFlatItems, componentStructure);
  const value = dataToString(componentItems, null, 2);

  return {
    title: '导出',
    onCancel: () => setModalType(null),
    footer: (
      <Space>
        <Button onClick={() => setModalType(null)}>取消</Button>
        <CopyToClipboard
          text={value}
          onCopy={() => {
            message.success('复制成功');
            setModalType(null);
          }}
        >
          <Button type='primary'>复制</Button>
        </CopyToClipboard>
      </Space>
    ),
    children: (
      <SimpleCodeEditor
        value={value}
        language='json'
        styled={`
          width: 100%;
          height: 500px;
          overflow: auto;
        `}
      />
    ),
  };
};

export default useExportModel;
