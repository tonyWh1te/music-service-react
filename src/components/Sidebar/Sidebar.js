import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { home, library, search } from '../../assets';
import './Sidebar.css';
import { useState } from 'react';

const setActive = ({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link');

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');

  const links = [
    {
      name: 'Home',
      icon: home,
    },
    {
      name: 'Genres',
      icon: search,
    },
    {
      name: 'Library',
      icon: library,
    },
  ];
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.substring(1);

    setActiveLink(pathname);
  }, [location]);

  return (
    <div className="nav">
      <nav className="nav__inner">
        <ul className="nav__list">
          {links.map(({ name, icon }, i) => (
            <li
              key={i}
              className={`${activeLink === name.toLowerCase() ? 'nav__item--active' : ''} nav__list-item`}
            >
              <NavLink
                className={setActive}
                to={`/${name.toLowerCase()}`}
              >
                <img
                  className="nav__img"
                  src={icon}
                  alt={name}
                />
                <span className="nav__name">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
