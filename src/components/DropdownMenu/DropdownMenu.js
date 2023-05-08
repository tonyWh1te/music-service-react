import './DropdownMenu.css';

const DropdownMenu = ({ menuRef }) => {
  return (
    <div className="dropdown-menu" ref={menuRef} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
      <div className="bg-gray-gradient-dark shadow-dropdown rounded-md">
        <div className="py-1" role="none">
          <a href="#" className="dropdown-menu__link animation-main" role="menuitem" tabIndex="-1" id="menu-item-0">
            Account settings
          </a>
          <form method="POST" action="#" role="none">
            <button type="submit" className="dropdown-menu__btn animation-main" role="menuitem" tabIndex="-1" id="menu-item-1">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
