import { getComponent } from '@dxsixpc/components';
import { styledToString } from '@dxsixpc/utils';
import { css } from '@emotion/react';
import { omit } from 'lodash';
import type { ComponentItemType } from 'src/type';
import { editorStyled, FormItemWrapper } from '../Styled';
import type { BaseRenderType } from './type';

export interface ComponentRenderProps extends BaseRenderType {
  componentItem?: ComponentItemType;
}

// 渲染组件
const componentRender = (props: ComponentRenderProps) => {
  const { componentItem, componentMap = {}, defaultValue = {} } = props;
  const { id = '', type, styled } = componentItem || {};
  const Component = getComponent(type, componentMap);

  return (
    <FormItemWrapper
      key={id}
      name={id}
      initialValue={defaultValue?.[id]}
      {...omit(componentItem, ['styled', 'id', 'props', 'hidden', 'children', 'showLabel'])}
      css={css`
        ${styledToString(styled)}
      `}
      className={props.type === 'editor' ? editorStyled : ''}
    >
      <Component
        {...omit(componentItem?.props, ['styled'])}
        styled={styledToString(componentItem?.props?.styled)}
      />
    </FormItemWrapper>
  );
};

export default componentRender;
