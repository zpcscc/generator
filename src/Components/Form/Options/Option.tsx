import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Checkbox, Radio, Space, Tooltip } from 'antd';
import type { InputProps } from 'src/Components';
import { Input } from 'src/Components';
import type { OptionSelectType } from 'src/type';
import { OptionWrapper } from './Styled';
import type { CurrOptionType } from './type';

export interface OptionProps {
  type?: OptionSelectType;
  option: Omit<CurrOptionType, 'id'> & { id: string };
  inputOptions?: InputProps;
  onOptionChange: (option: CurrOptionType) => void;
  onCheckedChange: (id: CurrOptionType['id']) => void;
  onRemoveOption: (id: CurrOptionType['id']) => void;
}

// 单个选项
const Option: React.FC<OptionProps> = (props) => {
  const {
    type = 'Radio',
    option,
    inputOptions,
    onOptionChange,
    onCheckedChange,
    onRemoveOption,
  } = props;
  const { id, checked, label } = option;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: option.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? '',
  };

  return (
    <OptionWrapper ref={setNodeRef} style={style} {...attributes}>
      <Input
        defaultValue={label}
        onChange={(value: string) => {
          onOptionChange({
            ...option,
            label: value,
            value,
          });
        }}
        prefix={<MenuOutlined {...listeners} style={{ cursor: 'pointer', marginRight: '10px' }} />}
        suffix={
          <Space>
            <Tooltip placement='top' title='默认选中项' mouseEnterDelay={0.5}>
              {type === 'Checkbox' ? (
                <Checkbox checked={checked} onClick={() => onCheckedChange(id)} />
              ) : (
                <Radio checked={checked} onClick={() => onCheckedChange(id)} />
              )}
            </Tooltip>
            <Tooltip placement='top' title='删除当前项' mouseEnterDelay={0.5}>
              <CloseCircleOutlined
                style={{ cursor: 'pointer', color: 'rgba(128,128,128.0.5)' }}
                onClick={() => onRemoveOption(id)}
              />
            </Tooltip>
          </Space>
        }
        bordered={false}
        {...inputOptions}
      />
    </OptionWrapper>
  );
};

export default Option;
