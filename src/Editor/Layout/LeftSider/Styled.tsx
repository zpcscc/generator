import styled from '@emotion/styled';
import { Button } from 'antd';

// 左侧边栏
export const LeftSiderWrapper = styled.div`
  width: 16rem;
  flex-shrink: 0;
  padding: 16px 0px 0px 8px;
  overflow-y: auto;
  height: 100%;

  h5 {
    margin-left: 10px;
  }

  .ant-space {
    width: 208px;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
  }
`;

// 组件选项按钮
export const ButtonWrapper = styled(Button)`
  width: 100px;
`;
