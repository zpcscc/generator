import { GridContainerWrapper } from './Styled';

export interface GridContainerProps {
  children: React.ReactNode;
  columns: number;
}

const GridContainer: React.FC<GridContainerProps> = ({ children, columns }) => {
  return (
    <GridContainerWrapper
      style={
        {
          '--col-count': columns,
        } as React.CSSProperties
      }
    >
      {children}
    </GridContainerWrapper>
  );
};

export default GridContainer;
