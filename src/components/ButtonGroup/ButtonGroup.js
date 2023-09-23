import clsx from 'clsx';
import './ButtonGroup.css';

const ButtonGroup = ({ children, className, vertical, ...attr }) => {
  const classses = clsx('btn-group', className, { 'goup-vertical': vertical });

  return (
    <div
      {...attr}
      className={classses}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
