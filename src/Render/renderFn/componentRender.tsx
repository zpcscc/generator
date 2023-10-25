/** @jsxImportSource @emotion/react */
import { getComponent } from '@dxsixpc/components';
import { css } from '@emotion/react';
import { isEmpty, isNil, omit } from 'lodash';
import { type ComponentItemType } from 'src/type';
import { FormItemWrapper, editorStyled } from '../Styled';
import { type BaseRenderType } from './type';

export interface ComponentRenderProps extends BaseRenderType {
  componentItem?: ComponentItemType;
}

// 渲染组件
const componentRender = (props: ComponentRenderProps) => {
  const { componentItem, componentMap = {}, defaultValue = {}, editorProps } = props;
  const { id = '', type, styled, showLabel, label } = componentItem || {};
  const Component = getComponent(type, componentMap);

  return (
    <FormItemWrapper
      key={id}
      name={id}
      initialValue={defaultValue?.[id]}
      {...omit(componentItem, ['styled', 'id', 'props', 'hidden', 'children', 'showLabel'])}
      label={isNil(showLabel) ? label : showLabel ? label : undefined}
      css={css`
        ${styled}
      `}
      className={isEmpty(editorProps) ? '' : editorStyled}
    >
      <Component {...componentItem?.props} />
    </FormItemWrapper>
  );
};

export default componentRender;
