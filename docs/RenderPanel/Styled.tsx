import styled from '@emotion/styled';
import { Space } from 'antd';

// 表单
export const SpaceWrapper = styled(Space)`
  display: flex;
  justify-content: space-around;
`;

export const EditorSpace = styled(Space)``;

export const RenderSpace = styled(Space)`
  & > .ant-space-item:last-child {
    height: 500px;
    width: 450px;
    overflow: auto;
  }
`;
