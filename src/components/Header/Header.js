import { memo, useState } from 'react';
import { useAuth } from '../../hooks';
import { Link } from 'react-router-dom';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Dropdown from '../Dropdown/Dropdown';
import './Header.css';

const Header = () => {
  const [value, setValue] = useState('');
  const { auth } = useAuth();

  const onChange = (e) => {
    setValue(e.target.value);
  };

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
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
