import { type CSSProperties, type FC } from 'react';
import { GridWrapper } from './Styled';

export interface GridProps {
  size: number;
  step?: number;
  onSizeChange: (size: number) => void;
}

const Grid: FC<GridProps> = ({ size }) => {
  return (
    <GridWrapper
      style={
        {
          '--grid-size': `${size}px`,
        } as CSSProperties
      }
    />
  );
};

export default Grid;
