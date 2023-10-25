import { type ModelDataType, type ModelType } from '../type';
import useExportModel from './useExportModel';
import useImportModel from './useImportModel';
import usePreviewModel from './usePreviewModel';

/**
 * @name 获取弹出框数据
 */
const useModelData = (setModalType: (modelType: ModelType | null) => void): ModelDataType => {
  return {
    exportModel: useExportModel(setModalType),
    importModel: useImportModel(setModalType),
    previewModel: usePreviewModel(setModalType),
  };
};
export default useModelData;
