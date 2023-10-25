import { useDroppable, type UniqueIdentifier } from '@dnd-kit/core';
import classNames from 'classnames';
import { type FC, type ReactNode } from 'react';
import styles from './Droppable.module.css';
import { droppable } from './droppable-svg';

export interface DroppableProps {
  children: ReactNode;
  dragging: boolean;
  id: UniqueIdentifier;
}

const Droppable: FC<DroppableProps> = ({ children, id, dragging }) => {
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
