import { memo, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { home, library, search } from '../../assets';
import './Sidebar.css';

const setActive = ({ isActive }) => clsx({ nav__link: true, 'nav__link--active': isActive });

const Sidebar = () => {
  const location = useLocation();
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

  useEffect(() => {
    const pathname = location.pathname.substring(1);

    setActiveLink(pathname);
  }, [location]);

  return (
    <div className="nav">
      <nav className="nav__inner">
        <ul className="nav__list">
          {links.map(({ name, icon }, i) => {
            const itemClasses = clsx({
              'nav__list-item': true,
              'nav__item--active': activeLink === name.toLowerCase(),
            });

            return (
              <li
                key={i}
                className={itemClasses}
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
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Sidebar);
