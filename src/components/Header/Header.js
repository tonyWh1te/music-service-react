import { useRef, useState, memo, useCallback, useMemo } from 'react';
import { useAuth } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './Header.css';

const Header = () => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const arrowRef = useRef(null);
  const { auth, logout } = useAuth();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClose = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  const menuItems = useMemo(
    () => [
      {
        name: 'Account settings',
        href: '/settings',
        onClick: () => {},
        additionalProps: {},
      },
      {
        name: 'Sign out',
        href: '/',
        onClick: () => logout(),
        additionalProps: {
          replace: true,
        },
      },
    ],
    [logout]
  );

  return (
    <header className="header header-block">
      <div className="container-wrapper md:mx-0">
        <div className="header__inner">
          <div className="relative">
            <input
              className="search__input"
              type="text"
              placeholder="Search"
              value={value}
              onChange={onChange}
            />
            <div
              className="search__img"
              data-search
            >
              <MagnifyingGlassIcon className="fill-gray-icon md:fill-black" />
            </div>
            <button className="search__close">
              <XMarkIcon className="fill-black" />
            </button>
          </div>
          <div className="user__block">
            <Link
              className="user__right-side"
              to="/profile"
            >
              <img
                className="user__img"
                src={auth.user.pic}
                alt="profile-pic"
              />
              <p className="user__text">{auth.user?.name}</p>
            </Link>
            <button
              className="w-7 h-7 opacity-70 animation-main"
              onClick={() => setOpened(!opened)}
              ref={arrowRef}
            >
              <ChevronDownIcon />
            </button>
          </div>
          <DropdownMenu
            menuItems={menuItems}
            opened={opened}
            triggerRef={arrowRef}
            onClose={onClose}
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
