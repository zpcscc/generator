import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import { SortableWrapper } from './Styled';

interface SortableContainerProps {
  id?: string;
  children: React.ReactNode;
  focus?: boolean;
}

/**
 * @name 包裹在组件外的拖拽容器
 * @param props
 * @returns
 */
const SortableContainer: React.FC<SortableContainerProps> = (props) => {
  const { id = '', focus = false, children } = props;
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const [isFocus, setIsFocus] = useState<boolean>(focus);
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
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {children}
    </SortableWrapper>
  );
};

export default SortableContainer;
