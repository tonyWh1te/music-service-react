import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import useAuth from '../../hooks/useAuth';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const arrowRef = useRef();
  const { auth } = useAuth();

  const toggleDropdown = (e) => {
    if (e.target !== menuRef.current && e.target !== arrowRef.current) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', toggleDropdown);

    return () => {
      window.removeEventListener('click', toggleDropdown);
    };
  });
  return (
    <header>
      <div className="container px-12 mx-auto md:mx-0">
        <div className="header__inner">
          <div className="flex justify-between items-center">
            <div className="relative">
              <input
                className="search__input"
                type="text"
                placeholder="Search"
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
              <div
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
                ref={arrowRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-icon pointer-events-none"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          {open && <DropdownMenu menuRef={menuRef} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
