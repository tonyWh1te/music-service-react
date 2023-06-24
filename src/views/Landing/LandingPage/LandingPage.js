import LandingNav from '../LandingNav/LandingNav';
import LandingFooter from '../LandingFooter/LandingFooter';
import { logo } from '../../../assets';
import './LandingPage.css';

const LandingPage = () => {
  const items = [
    {
      value: 'Log in',
      classes: 'header-landing__link animation-main hover:opacity-80',
    },
    {
      value: 'Sign up',
      classes: 'header-landing__link header-landing__button animation-main',
    },
  ];

  return (
    <div className="wrapper">
      <LandingNav items={items} />
      <main>
        <section>
          <div className="container px-12 mx-auto">
            <div className="top__inner">
              <img
                className="w-44 h-20 md:w-56 md:h-32 lg:w-fit lg:h-fit"
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
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
