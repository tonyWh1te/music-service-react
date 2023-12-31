import { memo } from 'react';
import { useAuth } from '../../hooks';
import { Link } from 'react-router-dom';
import SearchWrapper from '../Search/SearchWrapper';
import Dropdown from '../Dropdown/Dropdown';
import { boyProfilePic } from '../../assets';
import './Header.css';

const Header = () => {
  const { auth } = useAuth();

  return (
    <header className="header header-block">
      <div className="container-wrapper md:mx-0">
        <div className="header__inner">
          <SearchWrapper />
          <div className="user__block">
            <Link
              className="user__right-side"
              to="/profile"
            >
              <img
                className="user__img"
                src={boyProfilePic}
                alt="profile-pic"
              />
              <p className="user__text">{auth.user.email}</p>
            </Link>
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
