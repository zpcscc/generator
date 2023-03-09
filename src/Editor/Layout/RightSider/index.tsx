import { omit } from 'lodash';
import { useRecoilValue } from 'recoil';
import { Render } from 'src/Render';
import type { AnyObject, ComponentItemType } from 'src/type';
import currentState from '../../atoms/currentState';
import { LeftSiderWrapper } from './Styled';

export interface LeftSiderProps {
  // 值改变时
  onChange?: (pageData: ComponentItemType[]) => void;
}

// 左侧组件配置面板,用于渲染配置项
const RightSider: React.FC<LeftSiderProps> = () => {
  const { fieldConfig } = useRecoilValue(currentState);
  const { componentItem, configPanel } = fieldConfig || {};
  const defaultValue = { ...omit(componentItem, ['props', 'type']), ...componentItem?.props };

  const onValuesChange = (changeValue?: AnyObject, values?: AnyObject) => {
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <LeftSiderWrapper>
      <Render
        defaultValue={defaultValue}
        componentItems={configPanel?.()}
        onChange={onValuesChange}
      />
    </LeftSiderWrapper>
  );
};

export default RightSider;
