import styled from '@emotion/styled';

// 拖拽容器布局
export const SortableWrapper = styled.div`
  min-width: 200px;
  border: 1px dashed rgb(187, 187, 187);
  padding: 10px 8px 0px;
  margin-bottom: 8px;
  background-color: #fff;
  position: relative;
  &:hover {
    border: 1px solid #4096ff;
  }
`;

// 点击容器
export const PointerWrapper = styled.div`
  position: absolute;
  z-index: 20;
  bottom: -2px;
  right: -2px;
  height: 24px;
  border-top-left-radius: 8px;
  background: rgb(64, 158, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  .pointer {
    color: rgb(255, 255, 255);
    padding: 0px 4px;
    cursor: pointer;
  }
`;
