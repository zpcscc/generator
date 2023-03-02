import { omit } from 'lodash';
import { Fragment } from 'react';
import { getComponent } from '../../Components';
import { styledToString } from '../helpers';
import { FormItemWrapper } from '../Styled';
import type { ComponentRenderProps } from './type';

// 渲染组件
const componentRender = (props: ComponentRenderProps) => {
  const { componentItem, componentMap, initialValues } = props;
  const { id = '', name = '', type, styled } = componentItem || {};
  const ComponentWidget = getComponent(type, componentMap);
  return (
    <Fragment key={id + name}>
      <FormItemWrapper
        key={id + name}
        initialValue={initialValues?.[name]}
        name={name || id + type}
        {...omit(componentItem, ['styled'])}
        styled={styledToString(styled || {})}
      >
        <ComponentWidget {...componentItem?.props} />
      </FormItemWrapper>
    </Fragment>
  );
};

export default componentRender;
