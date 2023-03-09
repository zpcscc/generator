import styled from '@emotion/styled';

export const LiWrapper = styled.li`
  display: flex;
  box-sizing: border-box;
  touch-action: manipulation;
  transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1))
    scaleY(var(--scale-y, 1));
  transform-origin: 0 0;
`;
