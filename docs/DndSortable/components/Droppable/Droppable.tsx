import type { UniqueIdentifier } from '@dnd-kit/core';
import { useDroppable } from '@dnd-kit/core';
import classNames from 'classnames';
import { droppable } from './droppable-svg';
import styles from './Droppable.module.css';

export interface DroppableProps {
  children: React.ReactNode;
  dragging: boolean;
  id: UniqueIdentifier;
}

const Droppable: React.FC<DroppableProps> = ({ children, id, dragging }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={classNames(
        styles.Droppable,
        isOver && styles.over,
        dragging && styles.dragging,
        children && styles.dropped,
      )}
      aria-label='Droppable region'
    >
      {children}
      {droppable}
    </div>
  );
};

export default Droppable;
