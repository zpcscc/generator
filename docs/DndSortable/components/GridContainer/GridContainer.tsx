import { type CSSProperties, type FC, type ReactNode } from 'react';
import { GridContainerWrapper } from './Styled';

export interface GridContainerProps {
  children: ReactNode;
  columns: number;
}

const GridContainer: FC<GridContainerProps> = ({ children, columns }) => {
  return (
    <GridContainerWrapper
      style={
        {
          '--col-count': columns,
        } as CSSProperties
      }
    >
      {children}
    </GridContainerWrapper>
  );
};

export default GridContainer;
