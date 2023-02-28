import { Space, Text, TextArea } from '@dxsixpc/generator';
import { dataToString } from '@dxsixpc/utils';

export interface ResultTextareaProps {
  value: any;
  styled?: string;
}

/**
 * @name 结果文本域，用于展示组件返回的值
 * @param props
 * @returns
 */
const ResultTextarea: React.FC<ResultTextareaProps> = (props) => {
  const { value, ...rest } = props;
  return (
    <Space direction='vertical' {...rest}>
      <Text>onChange返回的结果</Text>
      <TextArea value={dataToString(value)} style={{ width: '300px' }} />
    </Space>
  );
};

export default ResultTextarea;
