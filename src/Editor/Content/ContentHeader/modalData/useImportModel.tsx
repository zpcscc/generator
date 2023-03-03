import { SimpleCodeEditor } from '@dxsixpc/generator';
import { stringToData } from '@dxsixpc/utils';
import type { ModalProps } from 'antd';
import { message } from 'antd';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import componentItemsState from 'src/Editor/atoms/componentItemsState';
import { integrateToSeparate } from 'src/Render';
import type { ModelType } from '../type';

// 导入弹出框
const useImportModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const setComponentItems = useSetRecoilState(componentItemsState);
  const [value, setValue] = useState<string>();

  return {
    title: '导入',
    cancelText: '取消',
    okText: '确定',
    onCancel: () => setModalType(null),
    onOk: () => {
      const componentItems = stringToData(value);
      if (Array.isArray(componentItems)) {
        setComponentItems(integrateToSeparate(componentItems));
        setModalType(null);
      } else {
        message.error('格式错误');
      }
    },
    children: (
      <SimpleCodeEditor
        value={value}
        language='json'
        onChange={setValue}
        styled={`
          & > div {
            width: 100%;
            height: 300px;
            overflow: auto!important;
            border: 1px solid rgb(217, 217, 217);
          }
        `}
      />
    ),
  };
};

export default useImportModel;
