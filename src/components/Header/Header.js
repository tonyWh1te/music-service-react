import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useRef, useState, useEffect } from 'react';
import { profilePic } from '../../assets';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const arrowRef = useRef();

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
              <input className="search__input" type="text" placeholder="Search" />
              <div className="search__img" data-search>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 stroke-1 stroke-gray-icon text-gray-icon md:stroke-black md:text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="search__close" data-close>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-black">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </div>
            </div>
            <div className="user__block">
              <a className="user__right-side" href="#">
                <img className="user__img" src={profilePic} alt="profile-pic" />
                <p className="user__text">Tiffany Kim</p>
              </a>
              <div className="cursor-pointer" onClick={() => setOpen(!open)} ref={arrowRef}>
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
