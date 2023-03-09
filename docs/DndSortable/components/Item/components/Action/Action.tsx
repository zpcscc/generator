import classNames from 'classnames';
import { forwardRef } from 'react';
import { ActionWrapper } from './Styled';

export interface ActionProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: React.CSSProperties['cursor'];
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
          } as React.CSSProperties
        }
      />
    );
  },
);

Action.displayName = 'Action';

export default Action;
