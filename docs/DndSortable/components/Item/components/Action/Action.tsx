import classNames from 'classnames';
import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react';
import { ActionWrapper } from './Styled';

export interface ActionProps extends HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: CSSProperties['cursor'];
}

const Action = forwardRef<HTMLButtonElement, ActionProps>(
  ({ active, className, cursor, style, ...props }, ref) => {
    return (
      <ActionWrapper
        ref={ref}
        {...props}
        className={classNames(className)}
        tabIndex={0}
        style={
          {
            ...style,
            cursor,
            '--fill': active?.fill,
            '--background': active?.background,
          } as CSSProperties
        }
      />
    );
  },
);

Action.displayName = 'Action';

export default Action;
