import classNames from 'classnames';
import styles from './Wrapper.module.css';

export interface WrapperProps {
  children: React.ReactNode;
  center?: boolean;
  style?: React.CSSProperties;
}

const Wrapper: React.FC<WrapperProps> = ({ children, center, style }) => {
  return (
    <div className={classNames(styles.Wrapper, center && styles.center)} style={style}>
      {children}
    </div>
  );
};

export default Wrapper;
