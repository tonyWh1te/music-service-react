import { forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef((props, ref) => {
  const {
    children,
    onClick,
    className,
    active,
    disabled = false,
    ...attr
  } = props;
  const classes = clsx('btn', className, { active }, 'btn--enabled');

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  return (
    <button
      {...attr}
      ref={ref}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

export default Button;
