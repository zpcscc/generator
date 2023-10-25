import classNames from 'classnames';
import { forwardRef, type CSSProperties, type ReactNode } from 'react';

import styles from './List.module.css';

export interface ListProps {
  children: ReactNode;
  columns?: number;
  style?: CSSProperties;
  horizontal?: boolean;
}

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ children, columns = 1, horizontal, style }: ListProps, ref) => {
    return (
      <ul
        ref={ref}
        style={
          {
            ...style,
            '--columns': columns,
          } as CSSProperties
        }
        className={classNames(styles.List, horizontal && styles.horizontal)}
      >
        {children}
      </ul>
    );
  },
);

List.displayName = 'List';

export default List;
