import { Divider } from 'antd';
import type { DividerProps } from 'antd/lib/Divider';
import React from 'react';
import { Wrapper } from './Styled';

export interface DividerWidgetProps extends DividerProps {
  text: string;
  styled?: string;
}

/**
 * @name 分隔线
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param text 分割线中间文本
 * @link 其他参数详见 https://ant.design/components/divider-cn/
 */
const DividerWidget: React.FC<DividerWidgetProps> = (props) => {
  const { text, styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Divider {...rest}>{text}</Divider>
    </Wrapper>
  );
};

export default DividerWidget;
