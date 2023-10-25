import { Form } from 'antd';
import { omit } from 'lodash';
import { useEffect, type FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Render } from 'src/Render';
import { type AnyObject, type ComponentItemType } from 'src/type';
import componentStructureState from '../../atoms/componentStructureState';
import currentState from '../../atoms/currentState';
import { updateItem } from '../utils';
import { LeftSiderWrapper } from './Styled';

export interface LeftSiderProps {
  // 值改变时
  onChange?: (pageData: ComponentItemType[]) => void;
}

// 右侧组件配置面板,用于渲染配置项
const RightSider: FC<LeftSiderProps> = () => {
  const { fieldConfig, currentId } = useRecoilValue(currentState);
  const [{ componentItems, structureItems }, setComponentStructure] =
    useRecoilState(componentStructureState);
  const componentItem = componentItems.find((item) => item.id === currentId);
  const { configPanel } = fieldConfig || {};
  const defaultValue = {
    ...omit(componentItem, ['id', 'type', 'props', 'children']),
    ...componentItem?.props,
  };
  const [form] = Form.useForm();

  const onValuesChange = (changeValue?: AnyObject, values?: AnyObject) => {
    if (currentId && changeValue) {
      setComponentStructure((componentStructure) =>
        updateItem(componentStructure, currentId, changeValue),
      );
    }
  };

  useEffect(() => {
    // 组件切换时，更新表单面板对应的值
    if (defaultValue) form?.setFieldsValue(defaultValue);
    // eslint-disable-next-line unicorn/no-abusive-eslint-disable, react-hooks/exhaustive-deps
  }, [currentId, structureItems]);

  return (
    <LeftSiderWrapper>
      <Render
        defaultValue={defaultValue}
        componentItems={configPanel?.()}
        onChange={onValuesChange}
        formOptions={{ form }}
      />
    </LeftSiderWrapper>
  );
};

export default RightSider;
