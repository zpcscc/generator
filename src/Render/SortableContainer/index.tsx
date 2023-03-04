import type { SortableContextProps } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { ComponentItemType, ComponentMapType } from 'src/type';
import { SortableWrapper } from './Styled';

interface ComponentProps extends SortableContextProps {
  componentItem: ComponentItemType;
  componentMap: ComponentMapType;
  index: number;
}

/**
 * @name 包裹在组件外的拖拽容器
 * @param props
 * @returns
 */
const SortableContainer: React.FC<ComponentProps> = (props) => {
  const { id = '', index, children } = props;
  const { attributes, listeners, setNodeRef, transform, transition, active } = useSortable({ id });
  return (
    <SortableWrapper
      key={`${id}${index || ''}`}
      className='drag-container'
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition ?? '',
        zIndex: active?.id === id ? 9999 : 9,
      }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {children}
    </SortableWrapper>
  );
};

export default SortableContainer;
