import { omit } from 'lodash';
import { Fragment } from 'react';
import { getComponent } from '../../Components';
import { styledToString } from '../helpers';
import { FormItemWrapper } from '../Styled';
import type { ComponentRenderProps } from './type';

// 渲染组件
const componentRender = (props: ComponentRenderProps) => {
  const { componentItem, componentMap, defaultValue, index } = props;
  const { id = '', type, styled } = componentItem || {};
  const Component = getComponent(type, componentMap);
  return (
    <Fragment key={`${id}${index || ''}`}>
      <FormItemWrapper
        key={`${id}${index || ''}`}
        initialValue={defaultValue?.[id]}
        name={id}
        {...omit(componentItem, ['styled', 'id', 'props', 'hidden', 'children', 'showLabel'])}
        styled={styledToString(styled || undefined)}
      >
        <Component {...componentItem?.props} />
      </FormItemWrapper>
    </Fragment>
  );
};

export default componentRender;
