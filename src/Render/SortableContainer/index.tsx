import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { OnEventChangeType } from 'src/type';
import { PointerWrapper, SortableWrapper } from './Styled';

interface SortableContainerProps {
  children: React.ReactNode;
  id?: string;
  onEventChange?: OnEventChangeType;
  currentId?: string;
}

/**
 * @name 包裹在组件外的拖拽容器
 * @param props
 * @returns
 */
const SortableContainer: React.FC<SortableContainerProps> = (props) => {
  const { id = '', currentId, children, onEventChange } = props;
  const { onSelect, onCopy, onDelete } = onEventChange || {};
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });
  const isFocus = currentId === id;

  const focusStyle = isFocus
    ? {
        outline: '3px solid rgb(64, 158, 255)',
        borderColor: 'rgb(255, 255, 255)',
      }
    : {};

  return (
    <SortableWrapper
      key={id}
      id={id}
      className='drag-container'
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition ?? '',
        opacity: isDragging ? 0.5 : undefined,
        ...focusStyle,
      }}
      onFocus={() => onSelect?.(id)}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {children}
      <PointerWrapper style={{ display: isFocus ? 'flex' : 'none' }}>
        <div className='pointer' role='button' onClick={() => onDelete?.(id)}>
          <DeleteOutlined />
        </div>
        <div className='pointer' role='button' onClick={() => onCopy?.(id)}>
          <CopyOutlined />
        </div>
      </PointerWrapper>
    </SortableWrapper>
  );
};

export default SortableContainer;
