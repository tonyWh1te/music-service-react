import { Link } from 'react-router-dom';
import { logo, telegram, youtube, vk } from '../../../assets';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="container px-12 mx-auto">
          <div className="pt-8">
            <nav className="flex justify-end">
              <ul className="flex items-center">
                <li className="pr-5">
                  <Link
                    className="header-landing__link animation-main hover:opacity-80"
                    to="/auth"
                  >
                    Sign up
                  </Link>
                </li>
                <li className="pl-5 border-l-2">
                  <Link
                    className="header-landing__link header-landing__button animation-main"
                    to="/auth"
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container px-12 mx-auto">
            <div className="top__inner">
              <img
                src={logo}
                alt="logo"
              />
              <h1 className="top__title">
                Music for <br />
                <span>everyone</span>
              </h1>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container px-12 mx-auto">
          <div className="footer__inner">
            <ul className="footer__social">
              <li>
                <a href="#">
                  <img
                    src={telegram}
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={youtube}
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={vk}
                    alt="social"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
