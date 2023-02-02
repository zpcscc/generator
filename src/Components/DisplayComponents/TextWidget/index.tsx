import { Typography } from 'antd';
import type { TextProps } from 'antd/lib/typography/Text';
import React from 'react';
import { Wrapper } from './Styled';

export interface TextWidgetProps extends TextProps {
  text: string;
  styled?: string;
  useAntd?: boolean;
}

/**
 * @name 文本展示
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param text 文本
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */
const TextWidget: React.FC<TextWidgetProps> = (props) => {
  const { text, styled, useAntd = true, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      {useAntd ? (
        <Typography.Text {...rest}>{text}</Typography.Text>
      ) : (
        <span className="ant-typography">{text}</span>
      )}
    </Wrapper>
  );
};

export default TextWidget;
