import { Space, Typography } from 'antd';
import { uniqueId } from 'lodash';
import { useSetRecoilState } from 'recoil';
import * as containerConfigMap from 'src/fieldConfig/container';
import * as displayConfigMap from 'src/fieldConfig/display';
import * as formConfigMap from 'src/fieldConfig/form';
import type { FieldConfigType } from 'src/type';
import componentItemsState from '../../atoms/componentStructureState';
import fieldConfigState from '../../atoms/fieldConfigState';
import { ButtonWrapper, LeftSiderWrapper } from './Styled';

const fieldConfig = {
  表单组件: formConfigMap,
  容器布局组件: containerConfigMap,
  展示组件: displayConfigMap,
};

// 左侧组件列表
const LeftSider: React.FC = () => {
  const setFieldConfig = useSetRecoilState(fieldConfigState);
  const setComponentItems = useSetRecoilState(componentItemsState);

  const onClick = (fieldConfig: FieldConfigType) => {
    const { componentItem } = fieldConfig;
    const id = uniqueId(`${componentItem.id}-`);
    setFieldConfig(fieldConfig);
    setComponentItems(({ componentItems, structureItems }) => ({
      componentItems: [...componentItems, { ...componentItem, id }],
      structureItems: [...structureItems, { id }],
    }));
  };

  return (
    <LeftSiderWrapper>
      {Object.entries(fieldConfig).map(([categoryName, configList]) => {
        return (
          <Typography key={categoryName}>
            <Typography.Title level={5}>{categoryName}:</Typography.Title>
            <Space size={[8, 16]} wrap>
              {Object.entries(configList).map(([fieldName, config]) => (
                <ButtonWrapper key={fieldName} onMouseUp={() => onClick(config)}>
                  {config.label}
                </ButtonWrapper>
              ))}
            </Space>
          </Typography>
        );
      })}
    </LeftSiderWrapper>
  );
};

export default LeftSider;
