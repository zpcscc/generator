import type { UniqueIdentifier } from '@dnd-kit/core';
import {
  closestCenter,
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import createRange from '../utilities/createRange';
import SortableItem from './SortableItem';
import Item from './SortableItem/Item';
import { UlWrapper, Wrapper } from './Styled';

// 基础配置
const BasicSetup: React.FC = () => {
  // 当前的对象列表
  const [items, setItems] = useState<UniqueIdentifier[]>(
    // 按递增的方式，新增一个包含16个item的数组
    createRange<UniqueIdentifier>(16, (index) => index + 1),
  );
  // 当前选中的组件id
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  // 拖拽传感器
  const sensors = useSensors(
    // 鼠标传感器
    useSensor(MouseSensor),
    // 触摸传感器
    useSensor(TouchSensor),
    // 键盘传感器
    useSensor(KeyboardSensor, {
      // 平滑滚动
      scrollBehavior: 'auto',
      // 坐标获取器，使用键盘坐标获取
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  // 获取当前id的index
  const getIndex = (id: UniqueIdentifier) => items.indexOf(id);
  // 当前选中组件的index
  const activeIndex = activeId ? getIndex(activeId) : -1;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => {
        if (!active) return;
        setActiveId(active.id);
      }}
      onDragEnd={({ over }) => {
        setActiveId(null);
        if (over) {
          const overIndex = getIndex(over.id);
          if (activeIndex !== overIndex) {
            setItems((items) => arrayMove(items, activeIndex, overIndex));
          }
        }
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <Wrapper>
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <UlWrapper>
            {items.map((value, index) => (
              <SortableItem key={value} id={value} index={index} />
            ))}
          </UlWrapper>
        </SortableContext>
      </Wrapper>
      {createPortal(
        <DragOverlay
          // 拖动结束后的放置动画
          dropAnimation={{
            sideEffects: defaultDropAnimationSideEffects({
              styles: {
                active: {
                  opacity: '0.5',
                },
              },
            }),
          }}
        >
          {activeId ? <Item value={items[activeIndex]} isDragOverlay /> : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};

export default BasicSetup;
