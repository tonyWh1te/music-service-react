import { telegram, youtube, vk } from '../../../assets';
import './LandingFooter.css';

const LandingFooter = () => {
  return (
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
  );
};

export default LandingFooter;
