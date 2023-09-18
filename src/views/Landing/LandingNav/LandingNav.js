import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks';
import AuthBoxContext from '../../../context/AuthBoxProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import './LandingNav.css';

const LandingNav = ({ items }) => {
  const navRef = useRef(null);
  const media = useMediaQuery('lg');

  const { switchToLogin, switchToSignUp } = useContext(AuthBoxContext);

  const navigate = useNavigate();

  const responsiveNav = navRef.current;

  if (media && responsiveNav.classList.contains('header-landing__nav--responsive')) {
    responsiveNav.classList.remove('header-landing__nav--responsive');
  }

  const toggleNavbar = () => {
    responsiveNav.classList.toggle('header-landing__nav--responsive');
  };

  const goToAuth = (form) => {
    if (form === 'Log in') {
      switchToLogin();
    } else {
      switchToSignUp();
    }

    navigate('/auth');
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
              {items.map(({ value, classes }, i) => (
                <li
                  key={i}
                  className="header-landing__list-item"
                >
                  <a
                    className={classes}
                    onClick={() => goToAuth(value)}
                  >
                    {value}
                  </a>
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
