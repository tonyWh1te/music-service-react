import { memo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useClickOutside } from '../../../hooks';
import './DropdownMenu.css';

const DropdownMenu = ({ menuItems, opened, triggerRef, onClose }) => {
  const menuRef = useRef(null);

  useClickOutside({
    elementRef: menuRef,
    onClickOutside: onClose,
    triggerRef,
    enabled: opened,
  });

  return (
    opened && (
      <div
        className="dropdown-menu dropdown-block"
        ref={menuRef}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="bg-gray-gradient-dark shadow-dropdown rounded-md">
          <div
            className="py-1"
            role="none"
          >
            {menuItems.map(({ name, href, onClick, additionalProps }, i) => (
              <Link
                key={i}
                to={href}
                className="dropdown-menu__link animation-main"
                onClick={onClick}
                {...additionalProps}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default memo(DropdownMenu);
