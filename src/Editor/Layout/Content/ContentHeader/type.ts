import { type ModalProps } from 'antd';

export type ModelType = 'importModel' | 'exportModel' | 'previewModel';

export type ModelDataType = Record<ModelType, ModalProps>;
