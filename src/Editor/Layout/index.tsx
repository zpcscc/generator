import type { CollisionDetection } from '@dnd-kit/core';
import {
  closestCorners,
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  MeasuringStrategy,
  PointerSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Form } from 'antd';
import { uniqueId } from 'lodash';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import componentItemsState from 'src/Editor/atoms/componentStructureState';
import currentState from 'src/Editor/atoms/currentState';
import leftSortableItemsState from 'src/Editor/atoms/leftSortableItemsState';
import { renderItem, SortableContainer } from 'src/Render';
import type { EditorProps } from '../Editor';
import Content from './Content';
import { onDragEnd, onDragOver } from './helpers';
import LeftSider from './LeftSider';
import { ButtonWrapper } from './LeftSider/Styled';
import RightSider from './RightSider';
import { LayoutWrapper } from './Styled';
import { findContainer, getFieldConfig } from './utils';

// 编辑器布局容器
const Layout: React.FC<EditorProps> = (props) => {
  const { componentMap } = props;
  const [{ componentItems, structureItems }, setComponentItems] =
    useRecoilState(componentItemsState);
  const [{ currentId, fieldConfig }, setCurrent] = useRecoilState(currentState);
  const setLeftSortableItems = useSetRecoilState(leftSortableItemsState);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState<boolean>(false);
  const structureItem = findContainer(currentId, structureItems);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // 拖移偏移1px的距离后再触发拖拽排序事件。若不设置偏移距离，会使拖拽事件覆盖掉点击事件。导致无法点击聚焦。
        distance: 1,
      },
    }),
  );

  const collisionDetection: CollisionDetection = useCallback(
    (args) => {
      // 若拖拽的是左侧组件，使用指针碰撞检测算法
      if (!currentId?.toString().includes('-')) {
        const pointerCollisions = pointerWithin(args);
        if (pointerCollisions.length > 0) {
          return pointerCollisions;
        }
        return closestCorners(args);
      }
      // 其他情况使用四角定位算法
      return closestCorners(args);
    },
    [currentId],
  );

  return (
    <LayoutWrapper>
      <DndContext
        sensors={sensors}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.Always,
          },
        }}
        collisionDetection={collisionDetection}
        onDragStart={({ active }) => {
          if (!active) return;
          const id = String(active.id);
          const isExistence = componentItems.find((item) => item.id === id);
          setIsNew(!isExistence);
          setActiveId(id);
          setCurrent({
            fieldConfig: getFieldConfig(id),
            currentId: id,
          });
        }}
        onDragOver={(event) => onDragOver(event, setComponentItems, componentItems)}
        onDragEnd={(event) => {
          setActiveId(null);
          onDragEnd(event, setComponentItems);
          setLeftSortableItems((items) =>
            items.map((item) => {
              if (item === event.active.id) {
                return uniqueId(`${item.split('-')[0]}-`);
              }
              return item;
            }),
          );
        }}
        onDragCancel={() => setActiveId(null)}
      >
        <LeftSider />
        <Content />
        <RightSider />
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
            {activeId ? (
              isNew ? (
                <ButtonWrapper>{fieldConfig?.label}</ButtonWrapper>
              ) : (
                <Form layout='vertical'>
                  <SortableContainer id={structureItem?.id} focus>
                    {renderItem({
                      structureItem,
                      componentItems,
                      defaultValue: {},
                      componentMap,
                      type: 'editor',
                    })}
                  </SortableContainer>
                </Form>
              )
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </LayoutWrapper>
  );
};

export default Layout;
