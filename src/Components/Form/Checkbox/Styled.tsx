import styled from '@emotion/styled';
import { Space } from 'antd';

export interface SpaceWrapperProps {
  styled?: string;
}

export const SpaceWrapper = styled(Space)<SpaceWrapperProps>`
  width: 100%;
  ${(props) => props.styled};
`;
