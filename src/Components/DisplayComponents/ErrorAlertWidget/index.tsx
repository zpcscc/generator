import { Alert } from 'antd';
import type { AlertProps } from 'antd/lib/alert';
import React from 'react';
import type { ComponentItemType } from 'src/types';
import { Wrapper } from './Styled';

export interface ErrorAlertWidgetProps extends AlertProps {
  componentItem: ComponentItemType;
}

// 错误提示。当JsonPanel不能正确渲染组件时，用此组件替代，并提示组件渲染错误
const ErrorAlertWidget: React.FC<ErrorAlertWidgetProps> = (props) => {
  const { componentItem } = props;
  const label = componentItem?.label ? `“${componentItem.label}”` : '';
  const type = componentItem?.type ? `(${componentItem.type})` : '';
  return (
    <Wrapper>
      <Alert
        type="error"
        showIcon
        message={`${label}组件渲染错误,请检查json里的组件type${type}是否正确`}
      />
    </Wrapper>
  );
};

export default ErrorAlertWidget;
