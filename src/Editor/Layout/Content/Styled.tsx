import styled from '@emotion/styled';
import { Space } from 'antd';

// layout布局
export const ContentLayoutWrapper = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  border-left: 1px solid rgb(224, 224, 224);
  border-right: 1px solid rgb(224, 224, 224);
`;

// 头部
export const ContentHeaderWrapper = styled(Space)`
  margin: 0.5rem 0.25rem;
`;

// 画布内容
export const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f6f5f6;
  padding: 12px;
  .content-placeholder {
    color: rgba(0, 0, 0, 0.4);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
