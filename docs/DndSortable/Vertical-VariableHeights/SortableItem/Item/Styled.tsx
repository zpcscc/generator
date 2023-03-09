import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-grow: 1;
  align-items: center;
  padding: 18px 20px;
  border-radius: calc(4px / var(--scale-x, 1));
  background-color: #fff;
  box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgb(63 63 68 / 5%),
    0 1px calc(3px / var(--scale-x, 1)) 0 rgb(34 33 81 / 15%);
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  list-style: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transform: scale(var(--scale, 1));
  transform-origin: 50% 50%;
  transition: box-shadow 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
  white-space: nowrap;
  cursor: grab;
  touch-action: manipulation;
  &:focus-visible {
    box-shadow: 0 0 4px 1px #4c9ffe, 0 0 0 calc(1px / var(--scale-x, 1)) rgb(63 63 68 / 5%),
      0 1px calc(3px / var(--scale-x, 1)) 0 rgb(34 33 81 / 15%);
  }
`;

// 拖动时样式
export const dragging = css`
  z-index: 0;
  opacity: 0.5;
  &:focus {
    box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgb(63 63 68 / 5%),
      0 1px calc(3px / var(--scale-x, 1)) 0 rgb(34 33 81 / 15%);
  }
`;

// dragOverlay的样式
export const dragOverlay = css`
  animation: pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
  box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05),
    -1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25);
  opacity: 1;
  cursor: grabbing;
  transform: scale(1.05);
  z-index: 999;
`;
