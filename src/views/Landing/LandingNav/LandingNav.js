import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import './LandingNav.css';

const LandingNav = ({ items }) => {
  const navRef = useRef(null);
  const media = useMediaQuery('lg');

  useEffect(() => {
    const responsiveNav = navRef.current;

    if (
      media &&
      responsiveNav.classList.contains('header-landing__nav--responsive')
    ) {
      responsiveNav.classList.remove('header-landing__nav--responsive');
    }
  }, [media]);

  const toggleNavbar = () => {
    navRef.current.classList.toggle('header-landing__nav--responsive');
  };

  return (
    <header className="h-[104px]">
      <div className="container-wrapper">
        <div className="header-landing__inner">
          <nav
            ref={navRef}
            className="header-landing__nav"
          >
            <ul className="header-landing__list">
              {items.map(({ id, title, classes }) => (
                <li
                  key={id}
                  className="header-landing__list-item"
                >
                  <Link
                    to="/auth"
                    className={classes}
                    state={{ activeForm: id }}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="header-landing__responsive-btns opacity-70 animation-main header-landing__btn-close"
              onClick={toggleNavbar}
            >
              <XMarkIcon />
            </button>
          </nav>
          <button
            className="header-landing__responsive-btns"
            onClick={toggleNavbar}
          >
            <Bars3Icon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default LandingNav;
