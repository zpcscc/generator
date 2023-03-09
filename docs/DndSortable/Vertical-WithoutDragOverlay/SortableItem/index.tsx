import type { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import Item from './Item';
import { LiWrapper } from './Styled';

export interface SortableItemProps {
  id: UniqueIdentifier;
  index: number;
}

// 拖拽项目，内包裹着需要拖拽的内容
const SortableItem: React.FC<SortableItemProps> = (props) => {
  const { id, index } = props;

  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  return (
    <LiWrapper
      style={
        {
          transition: [transition].filter(Boolean).join(', '),
          '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
          '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
          '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
          '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
          '--index': index,
          zIndex: isDragging ? 999 : 0,
        } as React.CSSProperties
      }
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Item value={id} isDragging={isDragging} />
    </LiWrapper>
  );
};

export default SortableItem;
