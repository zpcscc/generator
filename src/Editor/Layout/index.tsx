import type { CollisionDetection } from '@dnd-kit/core';
import {
  closestCorners,
  DndContext,
  MeasuringStrategy,
  PointerSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { uniqueId } from 'lodash';
import { useCallback, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import componentStructureState from 'src/Editor/atoms/componentStructureState';
import currentState from 'src/Editor/atoms/currentState';
import leftSortableItemsState from 'src/Editor/atoms/leftSortableItemsState';
import type { EditorProps } from '../Editor';
import Content from './Content';
import DndDragOverlay from './DndDragOverlay';
import { onDragEnd, onDragOver } from './helpers';
import LeftSider from './LeftSider';
import RightSider from './RightSider';
import { LayoutWrapper } from './Styled';
import { findStructureItem, getFieldConfig } from './utils';

// 编辑器布局容器
const Layout: React.FC<EditorProps> = (props) => {
  const { componentMap } = props;
  const [componentStructure, setComponentStructure] = useRecoilState(componentStructureState);
  const { componentItems, structureItems } = componentStructure;
  const [{ currentId, fieldConfig }, setCurrent] = useRecoilState(currentState);
  const setLeftSortableItems = useSetRecoilState(leftSortableItemsState);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState<boolean>(false);
  const structureItem = findStructureItem(structureItems, currentId);
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
      if (isNew) {
        // 添加新元素时，需要使用指针算法，为了精确识别root根容器
        const pointerCollisions = pointerWithin(args);
        if (pointerCollisions.length > 0) return pointerCollisions;
        return closestCorners(args);
      }
      // 其他情况，使用四角定位算法。有一定的容错率，所有操作都有反馈。用户体验会好些。
      return closestCorners(args);
    },
    [isNew],
  );

  return (
    <LayoutWrapper>
      <DndContext
        sensors={sensors}
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        collisionDetection={collisionDetection}
        onDragStart={({ active }) => {
          if (!active) return;
          const id = String(active.id);
          setIsNew(!componentItems.find((item) => item.id === String(active.id)));
          setActiveId(id);
          setCurrent({ fieldConfig: getFieldConfig(id), currentId: id });
        }}
        onDragOver={(event) => onDragOver(event, componentStructure, setComponentStructure)}
        onDragEnd={(event) => {
          setActiveId(null);
          onDragEnd(event, componentStructure, setComponentStructure);
          if (isNew) {
            // 若此次添加的是新元素，则更新左侧组件的id
            setLeftSortableItems((items) =>
              items.map((item) => {
                if (item === event.active.id) return uniqueId(`${item.split('-')[0]}-`);
                return item;
              }),
            );
          }
        }}
        onDragCancel={() => setActiveId(null)}
      >
        <LeftSider />
        <Content />
        <RightSider />
        <DndDragOverlay
          componentItems={componentItems}
          componentMap={componentMap}
          currentId={currentId}
          activeId={activeId}
          structureItem={structureItem}
          fieldConfig={fieldConfig}
          isNew={isNew}
        />
      </DndContext>
    </LayoutWrapper>
  );
};

export default Layout;
