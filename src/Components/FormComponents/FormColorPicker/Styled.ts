import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  ${(props) => props.styled};
`;

export const ColorCubeContainer = styled.div`
  padding: 4px;
  border: 1px solid #d4d4d4;
  width: calc(16px + (4px + 1px) * 2);
  height: calc(16px + (4px + 1px) * 2);
  cursor: pointer;
  pointer-events: auto;
`;

interface ColorCubeProps {
  width?: string;
  height?: string;
}

export const ColorCube = styled.div`
  width: ${({ width }: ColorCubeProps) => width || '16px'};
  height: ${({ height }) => height || '16px'};
  background-blend-mode: difference;
  background-color: ${({ color }) => color};
`;

interface ColorPickerContainerProps {
  x?: number;
  y?: number;
}

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  background-color: white;
  top: ${({ y }: ColorPickerContainerProps) =>
    y === undefined ? 'unset' : `${y}px`};
  left: ${({ x }) =>
    // magic numbers 依次为 color picker 宽度、边栏宽度、padding
    x === undefined ? 'unset' : `${x}px`};
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 0;

  & > * + * {
    margin-top: 8px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 8px;
    font-size: 12px;
  }
`;

export const ColorCubes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
