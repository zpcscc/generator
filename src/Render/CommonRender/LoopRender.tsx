import { Fragment } from 'react';
import type { ComponentItemType, ComponentMapType } from 'src/types';
import { getComponent } from '../../Components';
import * as containerComponents from '../../Components/Container';
import type { RenderProps } from '../type';
import ComponentRender from './ComponentRender';
import ContainerRender from './ContainerRender';

interface LoopRenderProps {
  initialValues: RenderProps['initialValues'];
  componentItems: ComponentItemType[];
  componentMap?: ComponentMapType;
}

/**
 * @name 循环渲染器
 * @param props 循环渲染的参数
 * @returns
 */
const LoopRender: React.FC<LoopRenderProps> = (props) => {
  const { componentItems, componentMap, initialValues } = props;
  return (
    <Fragment>
      {componentItems.map((componentItem: ComponentItemType) => {
        const { name, type } = componentItem;
        const Component = getComponent(type, componentMap);
        if (Object.keys(containerComponents).includes(type)) {
          return (
            <ContainerRender
              key={name}
              initialValues={initialValues}
              componentItem={componentItem}
              componentMap={componentMap}
              Component={Component}
            />
          );
        }
        return (
          <ComponentRender
            key={name}
            initialValue={initialValues?.[type]}
            componentItem={componentItem}
            Component={Component}
          />
        );
      })}
    </Fragment>
  );
};

export default LoopRender;
