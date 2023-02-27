import { Typography } from 'antd';
import type { TitleProps } from 'antd/lib/typography/Title';
import { Wrapper } from './Styled';

export interface TitleWidgetProps extends TitleProps {
  title: string;
  styled?: string;
  useAntd?: boolean;
}

/**
 * @name 标题展示
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param title 标题
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Title
 */
const TitleWidget: React.FC<TitleWidgetProps> = (props) => {
  const { title, styled, useAntd = true, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      {useAntd ? (
        <Typography.Title {...rest}>{title}</Typography.Title>
      ) : (
        <h5 className='ant-typography'>{title}</h5>
      )}
    </Wrapper>
  );
};

export default TitleWidget;
