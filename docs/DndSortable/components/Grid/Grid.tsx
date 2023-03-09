import { GridWrapper } from './Styled';

export interface GridProps {
  size: number;
  step?: number;
  onSizeChange: (size: number) => void;
}

const Grid: React.FC<GridProps> = ({ size }) => {
  return (
    <GridWrapper
      style={
        {
          '--grid-size': `${size}px`,
        } as React.CSSProperties
      }
    />
  );
};

export default Grid;
