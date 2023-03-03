import styled from '@emotion/styled';
import { Button } from 'antd';

// 左侧边栏
export const LeftSiderWrapper = styled.div`
  flex-shrink: 0;
  width: 16rem;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;

  .ant-form {
    width: 14rem;
    margin: 0 auto;
  }
`;

// 组件选项按钮
export const ButtonWrapper = styled(Button)`
  width: 100px;
`;
