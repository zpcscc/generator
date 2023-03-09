import type { ClientRect } from '@dnd-kit/core';
import type { SortingStrategy } from '@dnd-kit/sortable';

/**
 * @name 获取元素在水平和垂直的间距
 */
const getItemGap = (
  rects: ClientRect[],
  index: number,
  activeIndex: number,
): { x: number; y: number } => {
  const currentRect: ClientRect | undefined = rects[index];
  const previousRect: ClientRect | undefined = rects[index - 1];
  const nextRect: ClientRect | undefined = rects[index + 1];

  if (!currentRect || (!previousRect && !nextRect)) {
    return { x: 0, y: 0 };
  }

  if (activeIndex < index) {
    return {
      x: previousRect
        ? currentRect.left - (previousRect.left + previousRect.width)
        : nextRect.left - (currentRect.left + currentRect.width),
      y: previousRect
        ? currentRect.top - (previousRect.top + previousRect.height)
        : nextRect
        ? nextRect.top - (currentRect.top + currentRect.height)
        : 0,
    };
  }

  return {
    x: nextRect
      ? nextRect.left - (currentRect.left + currentRect.width)
      : currentRect.left - (previousRect.left + previousRect.width),
    y: nextRect
      ? nextRect.top - (currentRect.top + currentRect.height)
      : previousRect
      ? currentRect.top - (previousRect.top + previousRect.height)
      : 0,
  };
};

// 默认缩放比例
const defaultScale = {
  scaleX: 1,
  scaleY: 1,
};

/**
 * @name 拖拽排序策略
 * @returns
 */
const strategy: SortingStrategy = (props) => {
  const { activeIndex, overIndex, activeNodeRect: fallbackActiveRect, index, rects } = props;

  const activeNodeRect = rects[activeIndex] ?? fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  if (index === activeIndex) {
    const overIndexRect = rects[overIndex];

    if (!overIndexRect) {
      return null;
    }

    return {
      x:
        activeIndex < overIndex
          ? overIndexRect.left + overIndexRect.width - (activeNodeRect.left + activeNodeRect.width)
          : overIndexRect.left - activeNodeRect.left,
      y:
        activeIndex < overIndex
          ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height)
          : overIndexRect.top - activeNodeRect.top,
      ...defaultScale,
    };
  }

  const itemGap = getItemGap(rects, index, activeIndex);

  if (index > activeIndex && index <= overIndex) {
    return {
      x: -activeNodeRect.width - itemGap.x,
      y: -activeNodeRect.height - itemGap.y,
      ...defaultScale,
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: activeNodeRect.width + itemGap.x,
      y: activeNodeRect.height + itemGap.y,
      ...defaultScale,
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale,
  };
};

export default strategy;
