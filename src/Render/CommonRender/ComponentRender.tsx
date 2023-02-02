import React from 'react';
import type { ComponentItemType } from 'src/types';
import { styledToString } from './helpers';
import { FormItemWrapper } from './Styled';

interface ComponentRenderProps {
  initialValue?: any;
  componentItem: ComponentItemType;
  Component: React.FC<any>;
}

/**
 * @name 循环渲染器
 * @param props Component的参数
 * @returns
 */
const ComponentRender: React.FC<ComponentRenderProps> = (props) => {
  const { componentItem, Component, initialValue } = props;
  const { id = '', name = '', type, formItemProps } = componentItem || {};
  return (
    <FormItemWrapper
      key={id + name + type}
      initialValue={initialValue}
      name={name || id || type}
      {...formItemProps}
      styled={styledToString(formItemProps?.styled)}
    >
      <Component {...componentItem?.props} />
    </FormItemWrapper>
  );
};
export default ComponentRender;
