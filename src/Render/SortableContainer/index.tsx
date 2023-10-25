import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { type FC, type ReactNode } from 'react';
import { type EditorPropsType } from 'src/type';
import { PointerWrapper, SortableWrapper } from './Styled';

export interface SortableContainerProps {
  children: ReactNode;
  id?: string;
  editorProps?: EditorPropsType;
}

/**
 * @name 包裹在组件外的拖拽容器
 * @param props
 * @returns
 */
const SortableContainer: FC<SortableContainerProps> = (props) => {
  const { id = '', children, editorProps } = props;
  const { onSelect, onCopy, onDelete, currentId } = editorProps || {};
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });
  const isFocus = currentId === id;

  return (
    <SortableWrapper
      key={id}
      id={id}
      className='drag-container'
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition ?? '',
        opacity: isDragging ? 0.5 : undefined,
        ...(isFocus && {
          outline: '2px solid rgb(64, 158, 255)',
          borderColor: 'rgb(255, 255, 255)',
        }),
      }}
      onFocus={(e) => {
        const target = e.target as HTMLDivElement;
        onSelect?.(target.id);
      }}
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
