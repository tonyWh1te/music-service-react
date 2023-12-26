import { forwardRef } from 'react';
import clsx from 'clsx';
import './Button.css';

const Button = forwardRef((props, ref) => {
  const {
    children,
    onClick,
    className,
    active,
    disabled = false,
    ...attr
  } = props;

  const classes = clsx(
    'btn',
    'button-title',
    className,
    { active },
    'btn--enabled'
  );

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
