import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './DropdownMenu.css';
import { replace } from 'formik';

const DropdownMenu = ({ menuRef }) => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  return (
    <div
      className="dropdown-menu"
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
          <a
            href="#"
            className="dropdown-menu__link animation-main"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <button
            type="button"
            className="dropdown-menu__btn animation-main"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
            onClick={() =>
              logout(() => {
                navigate('/', { replace: true });
              })
            }
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
