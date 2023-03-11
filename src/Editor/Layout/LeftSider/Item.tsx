import { useSortable } from '@dnd-kit/sortable';
import { uniqueId } from 'lodash';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import componentStructureState from 'src/Editor/atoms/componentStructureState';
import currentState from 'src/Editor/atoms/currentState';
import leftSortableItemsState from 'src/Editor/atoms/leftSortableItemsState';
import type { FieldConfigType } from 'src/type';
import { getFieldConfig } from '../utils';
import { ButtonWrapper } from './Styled';

interface ItemProps {
  fieldConfig: FieldConfigType;
}

// 左侧组件item
const Button: React.FC<ItemProps> = (props) => {
  const { fieldConfig } = props;
  const { label, componentItem } = fieldConfig;
  const setCurrent = useSetRecoilState(currentState);
  const setComponentStructure = useSetRecoilState(componentStructureState);
  const leftSortableItems = useRecoilValue(leftSortableItemsState);
  const id = leftSortableItems.find((item) => item.split('-')[0] === componentItem.id) || 'input';
  const { listeners, setNodeRef, attributes, isDragging } = useSortable({
    id,
  });

  const onClick = () => {
    const newId = uniqueId(`${componentItem.id}-`);
    setCurrent({
      fieldConfig: getFieldConfig(id),
      currentId: newId,
    });
    setComponentStructure(({ componentItems, structureItems }) => ({
      componentItems: [...componentItems, { ...componentItem, id: newId }],
      structureItems: [...structureItems, { id: newId }],
    }));
  };

  return (
    <ButtonWrapper
      style={{ opacity: isDragging ? 0.5 : undefined }}
      onClick={onClick}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
