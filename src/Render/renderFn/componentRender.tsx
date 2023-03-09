import { omit } from 'lodash';
import type { ComponentItemType } from 'src/type';
import { getComponent } from '../../Components';
import { styledToString } from '../helpers';
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
      initialValue={defaultValue?.[id]}
      name={id}
      {...omit(componentItem, ['styled', 'id', 'props', 'hidden', 'children', 'showLabel'])}
      styled={styledToString(styled || undefined)}
      className={props.type === 'editor' ? editorStyled : ''}
    >
      <Component {...componentItem?.props} />
    </FormItemWrapper>
  );
};

export default componentRender;
