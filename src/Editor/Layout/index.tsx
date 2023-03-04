import type { UniqueIdentifier } from '@dnd-kit/core';
import {
  closestCorners,
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Form } from 'antd';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState } from 'recoil';
import componentItemsState from 'src/Editor/atoms/componentStructureState';
import { renderItem } from 'src/Render';
import type { StructureItemType } from 'src/type';
import type { EditorProps } from '../Editor';
import Content from './Content';
import { findContainer, onDragEnd, onDragOver } from './helpers';
import LeftSider from './LeftSider';
import RightSider from './RightSider';
import { LayoutWrapper } from './Styled';

// 编辑器布局容器
const Layout: React.FC<EditorProps> = (props) => {
  const { componentMap } = props;
  const [{ componentItems, structureItems }, setComponentItems] =
    useRecoilState(componentItemsState);
  const [activeId, setActiveId] = useState<UniqueIdentifier>();
  const structureItem = findContainer(activeId, structureItems);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // 拖移偏移1px的距离后再触发拖拽排序事件。若不设置偏移距离，会使拖拽事件覆盖掉点击事件。导致无法点击聚焦。
        distance: 1,
      },
    }),
    useSensor(TouchSensor),
  );

  const setItems = (newItems: StructureItemType[]) => {
    setComponentItems(({ componentItems }) => ({
      componentItems,
      structureItems: newItems,
    }));
  };

  return (
    <LayoutWrapper>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={(event) => setActiveId(event.active.id)}
        onDragOver={(event) => onDragOver(event, structureItems, setItems)}
        onDragEnd={(event) => {
          onDragEnd(event, structureItems, setItems);
          setActiveId(undefined);
        }}
      >
        <LeftSider />
        <Content />
        <RightSider />
        {createPortal(
          <DragOverlay>
            <Form layout='vertical'>
              {activeId
                ? renderItem({
                    structureItem,
                    componentItems,
                    defaultValue: {},
                    componentMap,
                    type: 'editor',
                  })
                : null}
            </Form>
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </LayoutWrapper>
  );
};

export default Layout;
