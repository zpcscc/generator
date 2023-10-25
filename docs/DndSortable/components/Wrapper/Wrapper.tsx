import classNames from 'classnames';
import { type CSSProperties, type FC, type ReactNode } from 'react';
import styles from './Wrapper.module.css';

export interface WrapperProps {
  children: ReactNode;
  center?: boolean;
  style?: CSSProperties;
}

const Wrapper: FC<WrapperProps> = ({ children, center, style }) => {
  return (
    <div className={classNames(styles.Wrapper, center && styles.center)} style={style}>
      {children}
    </div>
  );
};

export default Wrapper;
